import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { Playlist } from "../models/playlist.model";
import { Track } from "../models/track.model";
import { SavePlayListRequest } from "../models/save-playlist-request.model";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient) {
  }

  getPlaylists(): Observable<Playlist[] | undefined> {
    return this.http.get<Playlist[]>('/me/playlists').pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            tracks: item.tracks.total,
            owner: item.owner.display_name,
            cover: item.images[0].url,
            url: item.external_urls.spotify
          };
        });
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

  getPlaylist(id: string): Observable<{ playlist: Playlist, tracks: Track[] } | undefined> {
    return this.http.get<any>(`/playlists/${id}`).pipe(
      map((response: any) => {
        let playlist: Playlist = {
          id: response.id,
          name: response.name,
          tracks: response.tracks.total,
          owner: response.owner.display_name,
          cover: response.images[0].url,
          url: response.external_urls.spotify
        };

        let tracks: Track[] = response.tracks.items.map(({track}: any) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            album: track.album.name,
            duration: track.duration_ms,
            image: track.album.images[2].url,
            url: track.external_urls.spotify
          }
        });

        return {playlist, tracks};
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );
  }

  getRecommendations(tracks: string): Observable<Track[] | undefined> {
    return this.http.get<Track[]>(`/recommendations?seed_tracks=${tracks}&seed_artists=&seed_genres=`).pipe(
      map((response: any) => {
        return response.tracks.map((track: any) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            album: track.album.name,
            duration: track.duration_ms,
            image: track.album.images[2].url,
            url: track.external_urls.spotify,
            uri: track.uri
          };
        });
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );
  }

  savePlaylist(request: SavePlayListRequest): Observable<any> {
    // create a new playlist with custom name
    return this.http.post<SavePlayListRequest>(
      `/users/${request.userID}/playlists`,
      {name: `Recommended Tracks based on ${request.playlistName}`, description: "Generated using Spotify Profile App"})
      .pipe(
        switchMap((response: any) => {
          if (response) {
            // add tracks to the playlist
            return this.http.post(`/playlists/${response.id}/tracks`, {uris: request.uris}).pipe(
              map(() => {
                return response;
              })
            )
          }
          // If response is not available, return an empty Observable
          return of(undefined);
        }),
        catchError((error) => {
          console.error(error);
          return of(undefined);
        })
      );
  }

}
