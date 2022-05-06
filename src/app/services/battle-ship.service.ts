import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BoardGame } from '../model/boardgame';
import { Coordinates } from '../model/coordinates';

@Injectable({
  providedIn: 'root'
})
export class BattleShipService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<BoardGame>(environment.apiUrl)
  }

  create() {
    return this.http.get<BoardGame>(environment.apiUrl + "/create")
  }

  hit(coordinates: Coordinates) {
    return this.http.post<BoardGame>(environment.apiUrl + "/hit", coordinates)
  }

}
