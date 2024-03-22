import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from "rxjs";
import { Playlist } from "../models/playlist.model";


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
            name: item.name,
            tracks: item.tracks.total,
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
}
