import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of } from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile | undefined> {
    let profileRequest = this.http.get('/me').pipe(
      map((response: any) => {
        return {
          display_name: response.display_name,
          email: response.email,
          profile_url: response.external_urls.spotify,
          followers: response.followers.total,
          id: response.id,
          image: response.images[1].url
        }
      })
    );

    let followingRequest = this.http.get('/me/following?type=artist').pipe(
      map((response: any) => response.artists.total)
    );

    return forkJoin([profileRequest, followingRequest]).pipe(
      map(([profile, following]) => {
        return { ...profile, following };
      }),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );
  }
}
