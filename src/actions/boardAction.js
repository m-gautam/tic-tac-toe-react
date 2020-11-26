export const drawXAction = (cellIndex, size) => {
  return {
    type: "DRAW_X",
    cellIndex,
    size,
  };
};

export const drawYAction = (cellIndex, size) => {
  return {
    type: "DRAW_Y",
    cellIndex,
    size,
  };
};

export const drawBoard = (size) => {
  return {
    type: "NEW_GAME",
    size,
  };
};
