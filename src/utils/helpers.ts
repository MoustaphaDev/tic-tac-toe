// INTERFACES
export type MatrixRow = ("cross" | "circle" | null)[];

export interface Coordinates {
  xCoord: number;
  yCoord: number;
}

export interface ContainerProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | JSX.IntrinsicElements
    | JSX.IntrinsicElements[];
  xAlign?: boolean;
  yAlign?: boolean;
}

export interface BoardChildren {
  children: JSX.Element[];
  winner?: Player | boolean | null;
}

export interface TileProps extends Coordinates {
  selectTile: (
    { xCoord, yCoord }: Coordinates,
    boardMatrix: MatrixRow[],
    stateSetters: stateSetters,
    currentSymbol: player
  ) => void;
  stateSetters: stateSetters;
  boardMatrix: MatrixRow[];
  currentSymbol: player;
}

export type player = "cross" | "circle" | null;

export interface Player {
  player: player;
}

export interface stateSetters {
  setBoardMatrix: React.Dispatch<React.SetStateAction<MatrixRow[]>>;
  setCurrentSymbol: React.Dispatch<React.SetStateAction<player>>;
  setWinner: React.Dispatch<React.SetStateAction<null | boolean | Player>>;
}
export interface NewButtonProps {
  clearBoard: (
    stateSetters: stateSetters,
    generateEmptyBoard: () => MatrixRow[],
    firstPlayerSymbol: player
  ) => void;
  firstPlayerSymbol: player;
  stateSetters: stateSetters;
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

// UTILITIES
export function linearizeGrid(boardMatrix: MatrixRow[]) {
  return [...boardMatrix].reduce((tiles, row) => {
    return [...tiles, ...row];
  }, []);
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

export function checkBoardFull(boardMatrix: MatrixRow[]): boolean {
  const linearizedGrid = linearizeGrid(boardMatrix);
  const isBoardFull = linearizedGrid.every((point) => !!point);
  return isBoardFull;
}
