import Board from "./components/Board/Board";
import Tile from "./components/Tile/Tile";
import Container from "./components/Container/Container";
import NewGameButton from "./components/NewGameButton/NewGameButton";

import { useEffect, useState } from "react";
import {
  MatrixRow,
  generateEmptyBoard,
  getX,
  getY,
  player,
  Player,
} from "./utils/helpers";
import { handleClearBoard, handleSelectTile } from "./utils/gameEventHandlers";

function App({ firstPlayerSymbol }: { firstPlayerSymbol: "cross" | "circle" }) {
  const [currentSymbol, setCurrentSymbol] = useState<player>(firstPlayerSymbol);
  const [boardMatrix, setBoardMatrix] = useState<MatrixRow[]>(
    generateEmptyBoard()
  );
  const [winner, setWinner] = useState<boolean | Player>(false);
  const stateSetters = { setBoardMatrix, setCurrentSymbol, setWinner };

  useEffect(() => {
    if (typeof winner === "object") {
      console.log(`${winner.player}`);
      setCurrentSymbol(null);
      setWinner(false);
    }
  }, [winner]);

  const linearizedGrid = boardMatrix.reduce((tiles, row) => {
    return [...tiles, ...row];
  }, []);

  return (
    <>
      <Container xAlign={true}>
        <Board>
          {linearizedGrid.map((shape, idx) => {
            return (
              <Tile
                boardMatrix={boardMatrix}
                key={idx}
                currentSymbol={currentSymbol}
                yCoord={getY(idx)}
                xCoord={getX(idx)}
                selectTile={handleSelectTile}
                stateSetters={stateSetters}
              />
            );
          })}
        </Board>
      </Container>
      <Container xAlign={true} yAlign={true}>
        <NewGameButton
          clearBoard={handleClearBoard}
          firstPlayerSymbol={firstPlayerSymbol}
          stateSetters={stateSetters}
        />
      </Container>
    </>
  );
}

export default App;
