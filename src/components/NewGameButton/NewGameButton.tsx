import {
  generateEmptyBoard,
  NewButtonProps,
  player,
} from "../../utils/helpers";
import "./NewGameButton.css";

function NewGameButton({
  clearBoard,
  firstPlayerSymbol,
  stateSetters,
}: NewButtonProps) {
  return (
    <button
      className="btn"
      onClick={() => {
        clearBoard(stateSetters, generateEmptyBoard, firstPlayerSymbol);
      }}
    >
      New game
    </button>
  );
}

export default NewGameButton;
