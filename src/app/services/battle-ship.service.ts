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

  getBoardGame() {
    return this.http.get<BoardGame>(environment.apiUrl)
  }

  resetBoardGame() {
    return this.http.get<BoardGame>(environment.apiUrl + "/reset")
  }

  generateBoardGame() {
    return this.http.get<BoardGame>(environment.apiUrl + "/generate")
  }

  hit(coordinates: Coordinates) {
    return this.http.post<BoardGame>(environment.apiUrl + "/hit", coordinates)
  }

}
