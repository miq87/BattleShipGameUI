import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../model/boardgame';
import { Coordinates } from '../model/coordinates';
import { BattleShipService } from '../services/battle-ship.service';
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardGame: BoardGame;
  alphabet = "ABCDEFGHIJ"
  alphabetArray: any
  coordinates: Coordinates = new Coordinates(0, 0)

  constructor(private battleShipService: BattleShipService,
    public loadingService: LoadingService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.alphabetArray = Array.from(this.alphabet)
    this.battleShipService.get().subscribe({
      next: (v) => {
        this.boardGame = v
        this.openSnackBar(v.message)
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  create() {
    this.battleShipService.create().subscribe({
      next: (v) => {
        this.boardGame = v
        this.openSnackBar(v.message)
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  hit() {
    this.battleShipService.hit(this.coordinates).subscribe({
      next: (v) => {
        this.boardGame = v
        this.openSnackBar(v.message)
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "OK")
  }

}
