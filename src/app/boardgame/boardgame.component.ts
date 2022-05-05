import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../model/boardgame';
import { Coordinates } from '../model/coordinates';
import { BattleShipService } from '../services/battle-ship.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  //boardgame: number[][]
  boardGame: BoardGame;
  alphabet = "ABCDEFGHIJ"
  alphabetArray: any
  coordinates: Coordinates = new Coordinates(0, 0)

  constructor(private battleShipService: BattleShipService) { }

  ngOnInit(): void {
    this.alphabetArray = Array.from(this.alphabet)
    this.battleShipService.getBoardGame().subscribe({
      next: (v) => {
        this.boardGame = v
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  generate() {
    this.battleShipService.generateBoardGame().subscribe({
      next: (v) => {
        this.boardGame = v
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  hit() {
    this.battleShipService.hit(this.coordinates).subscribe({
      next: (v) => {
        this.boardGame = v
        console.log(v)
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

}
