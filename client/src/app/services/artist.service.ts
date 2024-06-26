import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from "rxjs";
import { Artist } from "../models/artist.model";

export enum TimeRange {
  LONG_TERM = 'long_term',
  MEDIUM_TERM = 'medium_term',
  SHORT_TERM = 'short_term',
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(private http: HttpClient) {
  }

  getTop10Artists(): Observable<Artist[] | undefined> {
    return this.http.get<Artist[]>('/me/top/artists?limit=10').pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            image: item.images[2].url,
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

  getTopArtists(timeRange: TimeRange): Observable<Artist[] | undefined> {
    return this.http.get<Artist[]>(`/me/top/artists?limit=20&time_range=${timeRange}`).pipe(
      map((response: any) => {
        return response.items.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            image: item.images[0].url,
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

  getArtist(id: string): Observable<Artist | undefined> {
    return this.http.get<Artist>(`/artists/${id}`).pipe(
      map((response: any) => {
        return {
          id: response.id,
          name: response.name,
          image: response.images[0].url,
          url: response.external_urls.spotify,
          followers: response.followers.total,
          popularity: response.popularity,
          genres: response.genres,
        };
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    )
  }

}
