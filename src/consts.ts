import { Block, ShapesObj } from "./types";

export const BOARD_HEIGHT =  20
export const BOARD_WIDTH =  12


export const SHAPES: ShapesObj = {
  [Block.I]: {
    shape: [
      [false, true, false, false],
      [false, true, false, false],
      [false, true, false, false],
      [false, true, false, false],
    ],
  },
  [Block.J]: {
    shape: [
      [true, true, false],
      [true, false, false],
      [true, false, false],
    ],
  },
  [Block.L]: {
    shape: [
      [true, false, false],
      [true, false, false],
      [true, true, false],
    ],
  },
  [Block.O]: {
    shape: [
      [true, true],
      [true, true],
    ],
  },
  [Block.S]: {
    shape: [
      [true, false, false],
      [true, true, false],
      [false, true, false],
    ],
  },
  [Block.T]: {
    shape: [
        [true, false, false],
        [true, true, false],
        [true, false, false],
    ],
  },
  [Block.Z]: {
    shape: [
        [false, true, false],
        [true, true, false],
        [true, false, false],
    ],
  },

};
