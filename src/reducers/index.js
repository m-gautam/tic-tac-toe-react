import boardReducer from "./boardReducer";
import counterReducer from "./counterReducer";
import playerReducer from "./playerReducer";

const { combineReducers } = require("redux");

const allReducers = combineReducers({
  player: playerReducer,
  board: boardReducer,
  counter: counterReducer,
});

export default allReducers;
