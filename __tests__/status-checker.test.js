import { checkRow, checkColumn, checkDiagonal } from "../status-checker";

describe("CheckRow function tests", () => {
  [
    { board: [["X", "X", "X"], ["_", "0", "_"], ["0", "_", "_"]], player: "X", row: 0, expected: true },
    { board: [["_", "0", "_"], ["X", "X", "X"], ["0", "_", "_"]], player: "X", row: 1, expected: true },
    { board: [["0", "_", "_"], ["_", "0", "_"], ["X", "X", "X"]], player: "X", row: 2, expected: true },
    { board: [["0", "0", "0"], ["_", "X", "_"], ["_", "X", "_"]], player: "0", row: 0, expected: true },
    { board: [["_", "X", "_"], ["0", "0", "0"], ["X", "_", "_"]], player: "0", row: 1, expected: true },
    { board: [["X", "_", "_"], ["_", "X", "_"], ["0", "0", "0"]], player: "0", row: 2, expected: true },
  ].forEach(({board, player, row, expected}) => {
    it("For row filled by player returns true", () => {
      expect(checkRow(board, player, row)).toEqual(expected);
    });
  });

  [
    { board: [["0", "0", "0"], ["X", "_", "X"], ["0", "X", "_"]], player: "X", row: 0, expected: false },
    { board: [["_", "0", "X"], ["X", "0", "X"], ["0", "_", "_"]], player: "X", row: 1, expected: false },
    { board: [["0", "0", "X"], ["_", "0", "X"], ["X", "0", "X"]], player: "X", row: 2, expected: false },
    { board: [["X", "X", "X"], ["_", "0", "_"], ["_", "0", "_"]], player: "0", row: 0, expected: false },
    { board: [["_", "0", "X"], ["X", "0", "0"], ["X", "X", "0"]], player: "0", row: 1, expected: false },
    { board: [["X", "_", "_"], ["_", "X", "0"], ["0", "0", "X"]], player: "0", row: 2, expected: false },
  ].forEach(({board, player, row, expected}) => {
    it("For row does not completed by player returns false", () => {
      expect(checkRow(board, player, row)).toEqual(expected);
    });
  });
});

describe("CheckColumn function tests", () => {
  [
    { board: [["X", "0", "0"], ["X", "0", "_"], ["X", "_", "_"]], player: "X", column: 0, expected: true },
    { board: [["_", "X", "_"], ["0", "X", "X"], ["0", "X", "_"]], player: "X", column: 1, expected: true },
    { board: [["0", "_", "X"], ["0", "0", "X"], ["_", "_", "X"]], player: "X", column: 2, expected: true },
    { board: [["0", "0", "X"], ["0", "X", "_"], ["0", "X", "_"]], player: "0", column: 0, expected: true },
    { board: [["_", "0", "X"], ["X", "0", "0"], ["X", "0", "_"]], player: "0", column: 1, expected: true },
    { board: [["X", "_", "0"], ["_", "X", "0"], ["0", "X", "0"]], player: "0", column: 2, expected: true },
  ].forEach(({board, player, column, expected}) => {
    it("For column filled by player returns true", () => {
      expect(checkColumn(board, player, column)).toEqual(expected);
    });
  });

  [
    { board: [["X", "0", "0"], ["0", "0", "_"], ["X", "_", "X"]], player: "X", column: 0, expected: false },
    { board: [["_", "0", "X"], ["0", "0", "X"], ["0", "0", "X"]], player: "X", column: 1, expected: false },
    { board: [["0", "_", "0"], ["X", "0", "X"], ["_", "_", "X"]], player: "X", column: 2, expected: false },
    { board: [["X", "0", "X"], ["0", "0", "_"], ["0", "X", "_"]], player: "0", column: 0, expected: false },
    { board: [["_", "0", "X"], ["X", "0", "0"], ["0", "X", "_"]], player: "0", column: 1, expected: false },
    { board: [["X", "_", "0"], ["_", "0", "0"], ["0", "X", "X"]], player: "0", column: 2, expected: false },
  ].forEach(({board, player, column, expected}) => {
    it("For column does not completed by player returns false", () => {
      expect(checkColumn(board, player, column)).toEqual(expected);
    });
  });
});

describe("CheckDiagonal function tests", () => {
  [
    { board: [["X", "0", "0"], ["0", "X", "_"], ["0", "_", "X"]], player: "X", column: 0, expected: true },
    { board: [["_", "X", "X"], ["0", "X", "0"], ["X", "0", "_"]], player: "X", column: 1, expected: true },
    { board: [["0", "0", "X"], ["X", "0", "_"], ["_", "X", "0"]], player: "0", column: 0, expected: true },
    { board: [["_", "X", "0"], ["X", "0", "_"], ["0", "0", "X"]], player: "0", column: 1, expected: true },
  ].forEach(({board, player, column, expected}) => {
    it("For any diagonal filled by player returns true", () => {
      expect(checkDiagonal(board, player, column)).toEqual(expected);
    });
  });

  [
    { board: [["0", "X", "0"], ["0", "X", "_"], ["0", "_", "X"]], player: "X", column: 0, expected: false },
    { board: [["_", "X", "X"], ["0", "X", "0"], ["0", "X", "_"]], player: "X", column: 1, expected: false },
    { board: [["_", "X", "X"], ["X", "0", "0"], ["0", "X", "_"]], player: "X", column: 1, expected: false },
    { board: [["X", "0", "X"], ["0", "0", "_"], ["_", "X", "0"]], player: "0", column: 0, expected: false },
    { board: [["_", "X", "0"], ["X", "0", "_"], ["X", "0", "0"]], player: "0", column: 1, expected: false },
    { board: [["_", "X", "0"], ["0", "X", "_"], ["X", "0", "0"]], player: "0", column: 1, expected: false },
  ].forEach(({board, player, column, expected}) => {
    it("For diagonal does not completed by player returns false", () => {
      expect(checkDiagonal(board, player, column)).toEqual(expected);
    });
  });
});