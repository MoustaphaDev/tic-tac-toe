import { BoardChildren } from "../../utils/helpers";
import "./Board.css";

function Board({ children, winner }: BoardChildren) {
  return (
    <>
      {typeof winner === "object" && (
        <div className="overlay x-align y-align">
          <p>
            {winner !== null ? "Player " : "It is a"}
            <em style={{ fontWeight: "bold", fontStyle: "unset" }}>
              {winner === null ? " draw" : winner.player + " "}
            </em>
            {winner !== null && "is the winner"}
          </p>
        </div>
      )}
      <div className="board border-style">{children}</div>
    </>
  );
}

export default Board;
