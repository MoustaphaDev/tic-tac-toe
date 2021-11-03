import {
  checkDiagonalsWin,
  checkHorizontalWin,
  checkVerticalWin,
  MatrixRow,
} from "../utils/helpers";

const boardMatrix: MatrixRow[] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

it("Should check if a player wins in the horizontal axis", () => {
  // write the 3 horizontal winning scenarios
  const hzWin1 = [...boardMatrix];
  hzWin1[0][0] = hzWin1[0][1] = hzWin1[0][2] = "cross";
  const hzWin2 = [...boardMatrix];
  hzWin2[1][0] = hzWin2[1][1] = hzWin2[1][2] = "cross";
  const hzWin3 = [...boardMatrix];
  hzWin3[2][0] = hzWin3[2][1] = hzWin3[2][2] = "cross";

  // Test for winning scenrios
  expect(checkHorizontalWin(hzWin1, 0)).toEqual({ player: "cross" });
  expect(checkHorizontalWin(hzWin2, 1)).toEqual({ player: "cross" });
  expect(checkHorizontalWin(hzWin3, 2)).toEqual({ player: "cross" });

  // write the 3 horizontal not winning scenarios
  const fakeHzWin1 = [...boardMatrix];
  fakeHzWin1[0][0] = fakeHzWin1[0][1] = "cross";
  fakeHzWin1[0][2] = "circle";
  const fakeHzWin2 = [...boardMatrix];
  fakeHzWin2[1][0] = fakeHzWin2[1][1] = "cross";
  fakeHzWin2[1][2] = "circle";
  const fakeHzWin3 = [...boardMatrix];
  fakeHzWin3[2][0] = fakeHzWin3[2][1] = "cross";
  fakeHzWin3[2][2] = "circle";

  // Test for not winning scenarios
  expect(checkHorizontalWin(fakeHzWin1, 0)).toBe(false);
  expect(checkHorizontalWin(fakeHzWin2, 1)).toBe(false);
  expect(checkHorizontalWin(fakeHzWin3, 2)).toBe(false);

  // test for empty board
  expect(checkHorizontalWin(boardMatrix, 0)).toBe(false);
  expect(checkHorizontalWin(boardMatrix, 1)).toBe(false);
  expect(checkHorizontalWin(boardMatrix, 2)).toBe(false);
});

it("Should check if a player wins in the vertical axis", () => {
  // write the 3 vertical winning scenarios
  const vtWin1 = [...boardMatrix];
  vtWin1[0][0] = vtWin1[1][0] = vtWin1[2][0] = "cross";
  const vtWin2 = [...boardMatrix];
  vtWin2[0][1] = vtWin2[1][1] = vtWin2[2][1] = "cross";
  const vtWin3 = [...boardMatrix];
  vtWin3[0][2] = vtWin3[1][2] = vtWin3[2][2] = "cross";

  // Test for winning scenrios
  expect(checkVerticalWin(vtWin1, 0)).toEqual({ player: "cross" });
  expect(checkVerticalWin(vtWin2, 1)).toEqual({ player: "cross" });
  expect(checkVerticalWin(vtWin3, 2)).toEqual({ player: "cross" });

  // write the 3 vertical not winning scenarios
  const fakeVtWin1 = [...boardMatrix];
  fakeVtWin1[0][0] = fakeVtWin1[1][0] = "cross";
  fakeVtWin1[2][0] = "circle";
  const fakeVtWin2 = [...boardMatrix];
  fakeVtWin2[0][1] = fakeVtWin2[1][1] = "cross";
  fakeVtWin2[2][1] = "circle";
  const fakeVtWin3 = [...boardMatrix];
  fakeVtWin3[0][2] = fakeVtWin3[1][2] = "cross";
  fakeVtWin3[2][2] = "circle";

  // Test for not winning scenarios
  expect(checkVerticalWin(fakeVtWin1, 0)).toBe(false);
  expect(checkVerticalWin(fakeVtWin2, 1)).toBe(false);
  expect(checkVerticalWin(fakeVtWin3, 2)).toBe(false);

  // test for empty board
  expect(checkVerticalWin(boardMatrix, 0)).toBe(false);
  expect(checkVerticalWin(boardMatrix, 1)).toBe(false);
  expect(checkVerticalWin(boardMatrix, 2)).toBe(false);
});

it("Should check if a player wins in the diagonals", () => {
  // write the 3 vertical winning scenarios
  const diagWin1 = [...boardMatrix];
  diagWin1[0][0] = diagWin1[1][1] = diagWin1[2][2] = "cross";
  const diagWin2 = [...boardMatrix];
  diagWin2[0][2] = diagWin2[1][1] = diagWin2[2][0] = "cross";

  // Test for winning scenrios
  expect(checkDiagonalsWin(diagWin1)).toEqual({ player: "cross" });
  expect(checkDiagonalsWin(diagWin2)).toEqual({ player: "cross" });

  // write the 3 vertical not winning scenarios
  const fakeDiagWin1 = [...boardMatrix];
  fakeDiagWin1[0][0] = fakeDiagWin1[1][1] = "cross";
  fakeDiagWin1[2][2] = "circle";

  const fakeDiagWin2 = [...boardMatrix];
  fakeDiagWin2[0][2] = fakeDiagWin2[1][1] = "cross";
  fakeDiagWin2[2][0] = "circle";

  // Test for not winning scenrios
  expect(checkDiagonalsWin(fakeDiagWin1)).toBe(false);
  expect(checkDiagonalsWin(fakeDiagWin2)).toBe(false);

  // test for empty board
  expect(checkDiagonalsWin(boardMatrix)).toBe(false);
  expect(checkDiagonalsWin(boardMatrix)).toBe(false);
  expect(checkDiagonalsWin(boardMatrix)).toBe(false);
});
