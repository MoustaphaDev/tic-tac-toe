import { watchWinner } from "../utils/gameWatcher";
import {
  checkDiagonalsWin,
  checkHorizontalWin,
  checkVerticalWin,
  MatrixRow,
} from "../utils/helpers";

let boardMatrix: MatrixRow[];

beforeEach(() => {
  //Reset board
  boardMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
});

describe("Checks if a player wins in the horizontal axis if his points are aligned and looses when they're not", () => {
  // write the 3 horizontal winning scenarios
  it("Checks if the player wins in a horizontal row1 win scenario", () => {
    boardMatrix[0][0] = boardMatrix[0][1] = boardMatrix[0][2] = "cross";
    expect(checkHorizontalWin(boardMatrix, 0)).toEqual({ player: "cross" });
  });

  it("Checks if the player wins in a horizontal row2 win scenario", () => {
    boardMatrix[1][0] = boardMatrix[1][1] = boardMatrix[1][2] = "cross";
    expect(checkHorizontalWin(boardMatrix, 1)).toEqual({ player: "cross" });
  });

  it("Checks if the player wins in a horizontal row3 win scenario", () => {
    boardMatrix[2][0] = boardMatrix[2][1] = boardMatrix[2][2] = "cross";
    expect(checkHorizontalWin(boardMatrix, 2)).toEqual({ player: "cross" });
  });

  // write the 3 horizontal not winning scenarios
  it("Checks if the player doesn't win in a horizontal row1 two points aligned scenario", () => {
    boardMatrix[0][0] = boardMatrix[0][1] = "cross";
    boardMatrix[0][2] = "circle";
    expect(checkHorizontalWin(boardMatrix, 0)).toBe(false);
  });

  it("Checks if the player doesn't win in a horizontal row2 two points aligned scenario", () => {
    boardMatrix[1][0] = boardMatrix[1][1] = "cross";
    boardMatrix[1][2] = "circle";
    expect(checkHorizontalWin(boardMatrix, 1)).toBe(false);
  });

  it("Checks if the player doesn't win in a horizontal row3 two points aligned scenario", () => {
    boardMatrix[2][0] = boardMatrix[2][1] = "cross";
    boardMatrix[2][2] = "circle";
    expect(checkHorizontalWin(boardMatrix, 2)).toBe(false);
  });

  // test for blank board
  it("Checks if the player doesn't win on a horizontal scenario when the board is blank", () => {
    expect(checkHorizontalWin(boardMatrix, 0)).toBe(false);
    expect(checkHorizontalWin(boardMatrix, 1)).toBe(false);
    expect(checkHorizontalWin(boardMatrix, 2)).toBe(false);
  });
});

describe("Checks if a player wins in the vertical axis if his points are aligned and looses when they're not", () => {
  // write the 3 vertical winning scenarios
  it("Checks if the player wins in a vertical column1 win scenario", () => {
    boardMatrix[0][0] = boardMatrix[1][0] = boardMatrix[2][0] = "cross";
    expect(checkVerticalWin(boardMatrix, 0)).toEqual({ player: "cross" });
  });

  it("Checks if the player wins in a vertical column2 win scenario", () => {
    boardMatrix[0][1] = boardMatrix[1][1] = boardMatrix[2][1] = "cross";
    expect(checkVerticalWin(boardMatrix, 1)).toEqual({ player: "cross" });
  });

  it("Checks if the player wins in a vertical column3 win scenario", () => {
    boardMatrix[0][2] = boardMatrix[1][2] = boardMatrix[2][2] = "cross";
    expect(checkVerticalWin(boardMatrix, 2)).toEqual({ player: "cross" });
  });

  // write the 3 vertical not winning scenarios
  it("Checks if the player doesn't win in a vertical column1 two points aligned scenario", () => {
    boardMatrix[0][0] = boardMatrix[1][0] = "cross";
    boardMatrix[2][0] = "circle";
    expect(checkVerticalWin(boardMatrix, 0)).toBe(false);
  });

  it("Checks if the player doesn't win in a vertical column2 two points aligned scenario", () => {
    boardMatrix[0][1] = boardMatrix[1][1] = "cross";
    boardMatrix[2][1] = "circle";
    expect(checkVerticalWin(boardMatrix, 1)).toBe(false);
  });

  it("Checks if the player doesn't win in a vertical column3 two points aligned scenario", () => {
    boardMatrix[0][2] = boardMatrix[1][2] = "cross";
    boardMatrix[2][2] = "circle";
    expect(checkVerticalWin(boardMatrix, 2)).toBe(false);
  });

  // test for blank board
  it("Checks if the player doesn't win on a vertical scenario when the board is blank", () => {
    expect(checkVerticalWin(boardMatrix, 0)).toBe(false);
    expect(checkVerticalWin(boardMatrix, 1)).toBe(false);
    expect(checkVerticalWin(boardMatrix, 2)).toBe(false);
  });
});

describe("Checks if a player wins in the diagonals if his points are aligned and looses when they're not", () => {
  // write the 3 vertical winning scenarios
  it("Checks if the player wins in a diagonal win scenario", () => {
    boardMatrix[0][0] = boardMatrix[1][1] = boardMatrix[2][2] = "cross";
    expect(checkDiagonalsWin(boardMatrix)).toEqual({ player: "cross" });
  });

  it("Checks if the player wins in an anti-diagonal win scenario", () => {
    boardMatrix[0][2] = boardMatrix[1][1] = boardMatrix[2][0] = "cross";
    expect(checkDiagonalsWin(boardMatrix)).toEqual({ player: "cross" });
  });

  // write the 3 vertical not winning scenarios
  it("Checks if the player doesn't wins in a diagonal two points aligned", () => {
    boardMatrix[0][0] = boardMatrix[1][1] = "cross";
    boardMatrix[2][2] = "circle";
    expect(checkDiagonalsWin(boardMatrix)).toBe(false);
  });

  it("Checks if the player doesn't wins in an anti-diagonal two points aligned", () => {
    boardMatrix[0][2] = boardMatrix[1][1] = "cross";
    boardMatrix[2][0] = "circle";
    expect(checkDiagonalsWin(boardMatrix)).toBe(false);
  });

  // test for blank board
  it("Checks if the player doesn't wins in a diagonal scenario when the board is blank", () => {
    expect(checkDiagonalsWin(boardMatrix)).toBe(false);
    expect(checkDiagonalsWin(boardMatrix)).toBe(false);
    expect(checkDiagonalsWin(boardMatrix)).toBe(false);
  });
});

describe("Checks if a player is winning when three points are aligned", () => {
  it("Checks if a player is winning when three points are vertically aligned", () => {
    boardMatrix = [
      ["cross", "circle", null],
      ["cross", null, "circle"],
      ["cross", null, null],
    ];
    expect(watchWinner(boardMatrix)).toEqual({ player: "cross" });
  });
  it("Checks if a player is winning when three points are horizontally aligned", () => {
    boardMatrix = [
      [null, "circle", null],
      ["circle", null, null],
      ["cross", "cross", "cross"],
    ];
    expect(watchWinner(boardMatrix)).toEqual({ player: "cross" });
  });

  it("Checks if a player is winning when three points are aligned along the diagonal", () => {
    boardMatrix = [
      ["cross", "circle", null],
      [null, "cross", null],
      ["circle", null, "cross"],
    ];
    expect(watchWinner(boardMatrix)).toEqual({ player: "cross" });
  });

  it("Checks if a player is not winning when the board is blank", () => {
    expect(watchWinner(boardMatrix)).toEqual(false);
  });
});
