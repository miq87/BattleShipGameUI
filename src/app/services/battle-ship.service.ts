import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coordinates } from '../model/coordinates';

@Injectable({
  providedIn: 'root'
})
export class BattleShipService {

  constructor(private http: HttpClient) { }

  getBoardGame() {
    return this.http.get(environment.apiUrl)
  }

  resetBoardGame() {
    return this.http.get(environment.apiUrl + "/reset")
  }

  generateBoardGame() {
    return this.http.get(environment.apiUrl + "/generate")
  }

  hit(coordinates: Coordinates) {
    return this.http.post(environment.apiUrl + "/hit", coordinates)
  }

}
