import Board from "./components/Board/Board";
import Tile from "./components/Tile/Tile";
import Container from "./components/Container/Container";
import NewGameButton from "./components/NewGameButton/NewGameButton";

import { useState } from "react";
import { MatrixRow, generateEmptyBoard, getX, getY } from "./utils/helpers";

function App() {
  const firstPlayerSymbol = "cross";
  const [currentSymbol, setCurrentSymbol] = useState<"circle" | "cross">(
    firstPlayerSymbol
  );
  const [boardMatrix, setBoardMatrix] = useState<MatrixRow[]>(
    generateEmptyBoard()
  );

  const handleSelectTile = ({
    xCoord,
    yCoord,
  }: {
    xCoord: number;
    yCoord: number;
  }) => {
    const newMatrix = [...boardMatrix];
    newMatrix[yCoord][xCoord] = currentSymbol;
    setBoardMatrix(newMatrix);
    setCurrentSymbol(currentSymbol === "circle" ? "cross" : "circle");
  };
  return (
    <>
      <Container xAlign={true}>
        <Board>
          {boardMatrix
            .reduce((tiles, row) => {
              return [...tiles, ...row];
            }, [])
            .map((shape, idx) => {
              return (
                <Tile
                  boardMatrix={boardMatrix}
                  key={idx}
                  yCoord={getY(idx)}
                  xCoord={getX(idx)}
                  selectTile={handleSelectTile}
                />
              );
            })}
        </Board>
      </Container>
      <Container xAlign={true} yAlign={true}>
        <NewGameButton
          clearBoard={() => {
            setBoardMatrix(generateEmptyBoard());
          }}
        />
      </Container>
    </>
  );
}

export default App;
