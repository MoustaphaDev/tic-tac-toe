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
  return (
    <div
      className={`tile border-style ${boardMatrix[yCoord][xCoord] ?? ""}`}
      onClick={boardMatrix[yCoord][xCoord] ? undefined : setTileShape}
    ></div>
  );
}

export default Tile;
