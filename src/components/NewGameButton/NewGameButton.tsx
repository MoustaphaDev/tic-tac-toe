import { generateEmptyBoard } from "../../utils/helpers";
import "./NewGameButton.css";

function NewGameButton({ clearBoard }: { clearBoard: () => void }) {
  return (
    <button className="btn" onClick={clearBoard}>
      New game
    </button>
  );
}

export default NewGameButton;
