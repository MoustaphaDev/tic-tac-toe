// INTERFACES
export type MatrixRow = ("cross" | "circle" | null)[];

export interface Coordinates {
  xCoord: number;
  yCoord: number;
}

export interface TileProps extends Coordinates {
  selectTile: ({ xCoord, yCoord }: Coordinates) => void;
  boardMatrix: MatrixRow[];
}

export interface Player {
  player: "cross" | "circle" | null;
}

// BOARD GENERATOR
export function generateEmptyBoard(): MatrixRow[] {
  return Array(9)
    .fill(null)
    .reduce((matrixRows: MatrixRow[], el, idx) => {
      if (idx % 3 === 0) {
        return [...matrixRows, [el]];
      }
      const [rows, row] = [
        matrixRows.slice(0, -1),
        matrixRows[matrixRows.length - 1],
      ];
      return [...rows, [...row, el]];
    }, []);
}

// COORDINATES GETTERS
export function getX(idx: number) {
  return idx % 3;
}

export function getY(idx: number) {
  return (idx - getX(idx)) / 3;
}

// GAME EVENTS WATCHERS
export function checkHorizontalWin(
  boardMatrix: MatrixRow[],
  row: number
): boolean | { player: "cross" | "circle" | null } {
  const playerToCheck = boardMatrix[row][0];
  const hasPlayerWon =
    playerToCheck !== null &&
    playerToCheck === boardMatrix[row][1] &&
    playerToCheck === boardMatrix[row][2];
  return (
    hasPlayerWon && {
      player: playerToCheck,
    }
  );
}

export function checkVerticalWin(
  boardMatrix: MatrixRow[],
  column: number
): boolean | { player: "cross" | "circle" | null } {
  const playerToCheck = boardMatrix[0][column];

  const hasPlayerWon =
    playerToCheck !== null &&
    playerToCheck === boardMatrix[1][column] &&
    playerToCheck === boardMatrix[2][column];
  return (
    hasPlayerWon && {
      player: playerToCheck,
    }
  );
}
export function checkDiagonalsWin(boardMatrix: MatrixRow[]): boolean | Player {
  const hasPlayerWon =
    (boardMatrix[0][0] !== null &&
      boardMatrix[0][0] === boardMatrix[1][1] &&
      boardMatrix[0][0] === boardMatrix[2][2]) ||
    (boardMatrix[2][0] !== null &&
      boardMatrix[2][0] === boardMatrix[1][1] &&
      boardMatrix[2][0] === boardMatrix[0][2]);
  return (
    hasPlayerWon && {
      player: boardMatrix[1][1],
    }
  );
}
