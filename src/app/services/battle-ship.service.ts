import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

}
