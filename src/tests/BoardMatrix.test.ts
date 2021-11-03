import { generateEmptyBoard, MatrixRow } from "../utils/helpers";

it("creates a matrix containing 3rows and 3columns which all have null as a value", () => {
  expect(generateEmptyBoard()).toStrictEqual<MatrixRow[]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});
