class Connect4 {
  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.gotWinner = false;
    this.actualPlayerId = 1;
    this.board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
  }

  switchPlayer() {
    if (this.actualPlayerId === 1) {
      this.actualPlayerId = 2;
    } else {
      this.actualPlayerId = 1;
    }
    console.log("Switched to Player ", this.actualPlayerId);
  }

  addChipToColumn(column) {
    if (this.gotWinner) return false;
    if (column < 0 || column > 6) return false;

    for (let row = 0; row < 6; row++) {
      if (this.board[column][row] === 0) {
        this.board[column][row] = this.actualPlayerId;
        this.checkWinner();
        this.switchPlayer();
        return true;
      }
    }

    return false;
  }

  checkWinner() {
    for (let col = 0; col < this.board[0].length - 3; col++) {
      for (let row = 0; row < this.board.length; row++) {
        if (
          this.board[row][col] === this.actualPlayerId &&
          this.board[row][col + 1] === this.actualPlayerId &&
          this.board[row][col + 2] === this.actualPlayerId &&
          this.board[row][col + 3] === this.actualPlayerId
        ) {
          this.gotWinner = this.actualPlayerId;
          return `${this.actualPlayerId} wins across!!!`;
        }
      }
    }

    for (let col = 0; col < this.board[0].length; col++) {
      for (let row = 0; row < this.board.length - 3; row++) {
        if (
          this.board[row][col] === this.actualPlayerId &&
          this.board[row + 1][col] === this.actualPlayerId &&
          this.board[row + 2][col] === this.actualPlayerId &&
          this.board[row + 3][col] === this.actualPlayerId
        ) {
          this.gotWinner = this.actualPlayerId;
          return `${this.actualPlayerId} wins vertically!!!`;
        }
      }
    }

    for (let col = 0; col < this.board[0].length - 3; col++) {
      for (let row = 0; row < this.board.length - 3; row++) {
        if (
          this.board[row][col] === this.actualPlayerId &&
          this.board[row + 1][col + 1] === this.actualPlayerId &&
          this.board[row + 2][col + 2] === this.actualPlayerId &&
          this.board[row + 3][col + 3] === this.actualPlayerId
        ) {
          this.gotWinner = this.actualPlayerId;
          return `${this.actualPlayerId} wins diagonally!!!`;
        }
      }
    }

    for (let col = 0; col < this.board[0].length - 3; col++) {
      for (let row = 3; row < this.board.length; row++) {
        if (
          this.board[row][col] === this.actualPlayerId &&
          this.board[row - 1][col + 1] === this.actualPlayerId &&
          this.board[row - 2][col + 2] === this.actualPlayerId &&
          this.board[row - 3][col + 3] === this.actualPlayerId
        ) {
          this.gotWinner = this.actualPlayerId;
          return `${this.actualPlayerId} wins diagonally!!!`;
        }
      }
    }

    return false;
  }
}

export default Connect4;
