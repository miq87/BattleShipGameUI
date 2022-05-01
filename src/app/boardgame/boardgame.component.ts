import { Component, OnInit } from '@angular/core';
import { BattleShipService } from '../services/battle-ship.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgame: number[][]
  alphabet = "ABCDEFGHIJ"
  alphabetArray: any
  selectedRow = 0
  selectedCol = 0

  constructor(private battleShipService: BattleShipService) { }

  ngOnInit(): void {
    this.alphabetArray = Array.from(this.alphabet)
    this.battleShipService.getBoardGame().subscribe({
      next: (v: any) => {
        this.boardgame = v
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  hit() {
    this.battleShipService.hit(this.selectedRow, this.selectedCol).subscribe({
      next: (v: any) => {
        this.boardgame = v
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

  generate() {
    this.battleShipService.generateBoardGame().subscribe({
      next: (v: any) => {
        this.boardgame = v
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

}
