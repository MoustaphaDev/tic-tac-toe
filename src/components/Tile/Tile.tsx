import "./Tile.css";
import { TileProps } from "../../utils/helpers";

function Tile({ selectTile, xCoord, yCoord, boardMatrix }: TileProps) {
  function setTileShape() {
    selectTile({ xCoord, yCoord });
  }
  return (
    <div
      className={`tile border-style ${boardMatrix[yCoord][xCoord] ?? ""}`}
      onClick={boardMatrix[yCoord][xCoord] ? undefined : setTileShape}
    ></div>
  );
}

export default Tile;
