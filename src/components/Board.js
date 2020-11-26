import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { player1, player2 } from "../actions/playerAction";
import Square from "./Square";
import "./../style.css";

const Board = (props) => {
  const board = useSelector((state) => state.board);

  return (
    <>
      <div>
        {board.map((val, idx) => (
          <div key={idx} style={{ flexDirection: "row", display: "flex" }}>
            {val.map((arrVal, i) => (
              <Square
                key={i}
                value={arrVal}
                cellIndex={{ idx, i }}
                size={props.size}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
