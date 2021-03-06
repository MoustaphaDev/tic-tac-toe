import {
  checkBoardFull,
  checkDiagonalsWin,
  checkHorizontalWin,
  checkVerticalWin,
  MatrixRow,
  Player,
} from "./helpers";

export function watchWinner(boardMatrix: MatrixRow[]): null | boolean | Player {
  const diagonalWinner = checkDiagonalsWin(boardMatrix);
  const boardFull = checkBoardFull(boardMatrix);
  let vertOrHzWinner: boolean | Player = false;
  for (let idx of [0, 1, 2]) {
    vertOrHzWinner =
      checkHorizontalWin(boardMatrix, idx) ||
      checkVerticalWin(boardMatrix, idx);
    if (vertOrHzWinner) break;
  }

  return diagonalWinner || vertOrHzWinner || (boardFull && null);
}
