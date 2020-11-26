import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawBoard } from "./actions/boardAction";
import "./App.css";
import Board from "./components/Board";
import { peer } from "./peerWebrtc";

function App() {
  const [start, setStart] = useState(false);
  const [gridSize, setGridSize] = useState(3);

  const player = useSelector((state) => state.player);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(drawBoard(gridSize));
    setStart(true);
  };

  return (
    <div className="App">
      <form onSubmit={() => console.log("object")}>
        <label>
          Enter the size for grid:
          <input
            type="text"
            value={gridSize}
            onChange={(event) => {
              console.log("gridSize", typeof event.target.value);
              setGridSize(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => onClickStart()} style={{ width: "100px" }}>
        Start
      </button>
      <h1>
        {counter < gridSize * gridSize && !player.result
          ? `${player.turn} playing`
          : "game ends"}
      </h1>
      {start ? <Board size={gridSize} /> : ""}
      <h1>
        {player.result
          ? `${player.result} wins`
          : counter === gridSize * gridSize
          ? "Tie"
          : "No result"}{" "}
      </h1>
      {console.log(peer)}
    </div>
  );
}

export default App;
