import React from "react";
import { useSelector } from "react-redux";
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
