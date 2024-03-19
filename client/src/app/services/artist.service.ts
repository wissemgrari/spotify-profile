import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from "rxjs";
import { Artist } from "../models/artist.model";


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
}
