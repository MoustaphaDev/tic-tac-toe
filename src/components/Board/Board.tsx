import "./Board.css";

interface BoardChildren {
  children: JSX.Element[];
}

function Board({ children }: BoardChildren) {
  return <div className="board border-style">{children}</div>;
}

export default Board;
