import "./Tile.css";
import { TileProps } from "../../utils/helpers";
import { player } from "../../utils/helpers";

function Tile({
  selectTile,
  xCoord,
  yCoord,
  boardMatrix,
  stateSetters,
  currentSymbol,
}: TileProps) {
  function setTileShape() {
    selectTile({ xCoord, yCoord }, boardMatrix, stateSetters, currentSymbol);
  }
  const tileClassName = `tile border-style ${
    boardMatrix[yCoord][xCoord] ?? ""
  }`;
  return (
    <div
      className={tileClassName}
      onClick={boardMatrix[yCoord][xCoord] ? undefined : setTileShape}
    ></div>
  );
}

export default Tile;
