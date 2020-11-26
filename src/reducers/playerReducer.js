const initialState = {
  playing: "PLAYER 1",
  turn: "p1",
  result: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER1":
      state.playing = "PLAYER 1";
      return state;
    case "PLAYER2":
      state.playing = "PLAYER 2";
      return state;
    case "TURN":
      const newState = { ...state };
      if (state.turn === "p1") {
        newState.turn = "p2";
      } else {
        newState.turn = "p1";
      }
      return newState;
    case "RESULT":
      if (action.winner === "X") {
        state.result = "p1";
      } else {
        state.result = "p2";
      }

      return state;
    default:
      return state;
  }
};

export default playerReducer;
