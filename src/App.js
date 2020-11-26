import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawBoard } from "./actions/boardAction";
import "./App.css";
import Board from "./components/Board";
import { peer } from "./peerWebrtc";

function App() {
  const [start, setStart] = useState(false);
  const [gridSize, setGridSize] = useState(3);

  const peerConn = () => {
    const conn = peer.connect("tic-tac-toe-peer-id");
    console.log("peerID-=-=->");
    // peer.on("open", function (id) {
    //   console.log("peerID-=-=->");
    // });
    conn.send({
      strings: "hi!",
      numbers: 150,
    });
  };

  const player = useSelector((state) => state.player);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(drawBoard(gridSize));
    setStart(true);
  };

  return (
    <div className="App">
      {start ? (
        <>
          <h1>
            {counter < gridSize * gridSize && !player.result
              ? `${player.turn} playing`
              : "game ends"}
          </h1>
          <Board size={gridSize} />
          <h1>
            {player.result
              ? `***** ${player.result} WINS *****`
              : counter === gridSize * gridSize
              ? "TIE"
              : "No result"}
          </h1>
          <button onClick={() => window.location.reload(true)}>
            Start New Game
          </button>
        </>
      ) : (
        <div>
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
          <button
            onClick={() => onClickStart()}
            style={{ width: "100px", marginTop: "50px" }}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
