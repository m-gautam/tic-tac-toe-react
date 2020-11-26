export const player1 = (player) => {
  return {
    type: "PLAYER1",
    player,
  };
};

export const player2 = (player) => {
  return {
    type: "PLAYER2",
    player,
  };
};

export const toggleTurnAction = () => {
  return {
    type: "TURN",
  };
};

export const gameResult = (winner) => {
  return {
    type: "RESULT",
    winner,
  };
};
