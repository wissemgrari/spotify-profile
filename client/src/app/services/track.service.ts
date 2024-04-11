import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from "rxjs";
import { Track } from "../models/track.model";
import { TrackAnalysis } from "../models/track-analysis.model";

export enum TimeRange {
  LONG_TERM = 'long_term',
  MEDIUM_TERM = 'medium_term',
  SHORT_TERM = 'short_term',
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private http: HttpClient) {}
  getTop10Tracks(): Observable<Track[] | undefined> {
    return this.http.get<Track[]>('/me/top/tracks?limit=10').pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            artist: item.artists.map((artist: any) => artist.name).join(', '),
            album: item.album.name,
            duration: item.duration_ms,
            image: item.album.images[0].url,
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
  getTopTracks(timeRange: TimeRange): Observable<Track[] | undefined> {
    return this.http.get<Track[]>(`/me/top/tracks?limit=20&time_range=${timeRange}`).pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            artist: item.artists.map((artist: any) => artist.name).join(', '),
            album: item.album.name,
            duration: item.duration_ms,
            image: item.album.images[0].url,
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
  getRecentTracks(): Observable<Track[] | undefined> {
    return this.http.get<Track[]>('/me/player/recently-played').pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.track.name,
            artist: item.track.artists.map((artist: any) => artist.name).join(', '),
            album: item.track.album.name,
            duration: item.track.duration_ms,
            image: item.track.album.images[2].url,
            url: item.track.external_urls.spotify
          };
        });
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

  getTrack(id: string): Observable<Track | undefined> {
    return this.http.get<Track>(`/tracks/${id}`).pipe(
      map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          artist: item.artists.map((artist: any) => artist.name).join(', '),
          album: item.album.name,
          duration: item.duration_ms,
          image: item.album.images[1].url,
          url: item.external_urls.spotify,
          year: item.album.release_date.split('-')[0],
          popularity: item.popularity
        };
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

  getTrackAnalysis(id: string): Observable<TrackAnalysis | undefined> {
    return this.http.get<TrackAnalysis>(`/audio-analysis/${id}`).pipe(
      map((item: any) => {
        return {
          key: item.track.key,
          modality: item.track.mode,
          time_signature: item.track.time_signature,
          tempo: Math.floor(item.track.tempo),
          bars: item.bars.length,
          beats: item.beats.length,
          sections: item.sections.length,
          segments: item.segments.length,
        };
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

}
