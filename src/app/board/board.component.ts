import { Component, OnInit, Injectable } from '@angular/core';

import { TicTacService } from '../tic-tac.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  liveBoard: Array<string>;
  boardCells: Array<number> = new Array(this.service.boardSize * this.service.boardSize);
  localWinner: string;

  constructor(private service: TicTacService) { }

  ngOnInit(): void {
    this.service.generateBoard();

    this.liveBoard = this.service.board;

    for (let i = 0; i < this.service.boardSize * this.service.boardSize; i++) {
      this.boardCells[i] = i;
    }
  }

  clicked(id: number): void{
    this.service.move(id);
    if(this.service.winner){
      this.localWinner = this.service.winner;
      console.log(this.service.winner);
    }
  }

  reset(): void{
    window.location.reload();
  }
}
