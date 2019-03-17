import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GamesService {

  private URI_REST = 'http://localhost:3000/api';

  constructor( private http: HttpClient  ) { }

  public getGames(): Observable<any> {
    return this.http.get( `${this.URI_REST}/games` );
  }

  public createGame(game: Game): Observable<any> {
    return this.http.post(`${this.URI_REST}/games`, game);
  }

  public getGame(id: string): Observable<any> {
    return this.http.get(`${this.URI_REST}/games/${id}`);
  }

  public updateGame( id: number, game: Game): Observable<any> {
    return this.http.put(`${this.URI_REST}/games/${id}`, game);
  }

  public deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.URI_REST}/games/${id}`);
  }
}
