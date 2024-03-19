import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from "rxjs";
import { Track } from "../models/track.model";

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private http: HttpClient) {
  }

  getTop10Tracks(): Observable<Track[] | undefined> {
    return this.http.get<Track[]>('/me/top/tracks?limit=10').pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
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
}
