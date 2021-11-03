import { getX, getY } from "../utils/helpers";

it("Checks if the xcoords are valid according to the provided index", () => {
  // X-COORDS test
  expect(getX(0)).toBe(0);
  expect(getX(1)).toBe(1);
  expect(getX(2)).toBe(2);
  expect(getX(3)).toBe(0);
  expect(getX(4)).toBe(1);
  expect(getX(5)).toBe(2);
  expect(getX(6)).toBe(0);
  expect(getX(7)).toBe(1);
  expect(getX(8)).toBe(2);
});

it("Checks if ycoords are valid according to the provided index", () => {
  // y-COORDS test
  expect(getY(0)).toBe(0);
  expect(getY(1)).toBe(0);
  expect(getY(2)).toBe(0);
  expect(getY(3)).toBe(1);
  expect(getY(4)).toBe(1);
  expect(getY(5)).toBe(1);
  expect(getY(6)).toBe(2);
  expect(getY(7)).toBe(2);
  expect(getY(8)).toBe(2);
});

export {};
