import { Injectable } from '@angular/core';

import { BoardComponent } from './board/board.component';

@Injectable({
  providedIn: 'root'
})
export class TicTacService {
  board: Array<string>;
  boardSize: number = 3;
  xTurn: boolean = true;
  lockedCelss: Array<number>;
  winner: string;

  constructor() {}

  generateBoard(): void{
    this.board = new Array(this.boardSize * this.boardSize);
  }

  move(id: number): void{
    if(!this.winner){
      if(!this.lockedCelss){
        if(this.xTurn){
          this.xTurn = false
          this.board[id] = "X";
          this.lockedCelss = [];
          this.lockedCelss.push(id);
        }
        else{
          this.xTurn = true
          this.board[id] = "O";
          this.lockedCelss = [];
          this.lockedCelss.push(id);
        }
      }
      else{
          if(!this.lockedCelss.includes(id)){
            if(this.xTurn){
              this.xTurn = false
              this.board[id] = "X";
              this.lockedCelss.push(id);
            }
            else{
              this.xTurn = true
              this.board[id] = "O";
              this.lockedCelss.push(id);
            }        }
      }
      // console.log(this.board);

      // console.log(this.lockedCelss);
      this.checkIfWon();
    }
  }

  checkIfWon(): void{
    let winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of winnerLines) {

      if(this.board[line[0]] === this.board[line[1]] && this.board[line[1]] === this.board[line[2]] && this.board[line[0]] !== undefined){
      console.log("win");
      this.winner = this.board[line[0]];
      // console.log(this.winner);
      break;
      }
    }
  }
}
