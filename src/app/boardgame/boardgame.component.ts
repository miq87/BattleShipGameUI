import { Component, OnInit } from '@angular/core';
import { BattleShipService } from '../services/battle-ship.service';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  public boardgame: number[][]

  constructor(private battleShipService: BattleShipService) { }

  ngOnInit(): void {
    this.battleShipService.getBoardGame().subscribe({
      next: (v: any) => {
        this.boardgame = v
        console.log(this.boardgame)
      },
      error: () => console.error("Problem with loading boardgame")
    })
  }

}
