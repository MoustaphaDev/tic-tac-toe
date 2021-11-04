import { watchWinner } from "./gameWatcher";
import { Coordinates, MatrixRow, player, stateSetters } from "./helpers";

export function handleSelectTile(
  { xCoord, yCoord }: Coordinates,
  boardMatrix: MatrixRow[],
  stateSetters: stateSetters,
  currentSymbol: player
) {
  const newMatrix = [...boardMatrix];
  newMatrix[yCoord][xCoord] = currentSymbol;
  stateSetters.setBoardMatrix(newMatrix);
  stateSetters.setCurrentSymbol(
    currentSymbol === "circle" ? "cross" : currentSymbol && "circle"
  );
  stateSetters.setWinner(watchWinner(boardMatrix));
}

export function handleClearBoard(
  stateSetters: stateSetters,
  generateEmptyBoard: () => MatrixRow[],
  firstPlayerSymbol: player
): void {
  stateSetters.setBoardMatrix(generateEmptyBoard());
  stateSetters.setCurrentSymbol(firstPlayerSymbol);
  stateSetters.setWinner(false);
}
