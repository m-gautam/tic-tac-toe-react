const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    case "DRAW_X":
      const newState_X = [...state];
      newState_X[action.cellIndex.idx][action.cellIndex.i] = "X";
      return newState_X;
    case "DRAW_Y":
      console.log("in Reducer");
      const newState_O = [...state];
      newState_O[action.cellIndex.idx][action.cellIndex.i] = "O";
      return newState_O;
    case "NEW_GAME":
      // const newState = new Array(action.size);
      for (var l = 0; l < action.size; l++) {
        state[l] = new Array(action.size);
      }
      for (var i = 0; i < action.size; i++) {
        for (var j = 0; j < action.size; j++) {
          state[i][j] = null;
        }
      }
      return state;
    default:
      return initialBoardState;
  }
};

export default boardReducer;
