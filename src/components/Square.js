import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawXAction, drawYAction } from "../actions/boardAction";
import { increment } from "../actions/increment";
import { gameResult, toggleTurnAction } from "../actions/playerAction";

const Square = (props) => {
  const board = useSelector((state) => state.board);
  const player = useSelector((state) => state.player);

  const counter = useSelector((state) => state.counter);

  const [winner, setWinner] = useState("");

  const dispatch = useDispatch();

  const result = () => {
    console.log("in Result");
    for (let i = 0; i < props.size; i++) {
      for (let j = 0; j < props.size; j++) {
        if (board[i][j]) {
          console.log("horizontal check");
          if (
            props.size - j > 2 &&
            board[i][j] === board[i][j + 1] &&
            board[i][j] === board[i][j + 2]
          ) {
            console.log("winner");
            setWinner(board[i][j]);
            dispatch(gameResult(board[i][j]));
            return;
          }
          console.log("vertical check");
          if (
            props.size - i > 2 &&
            board[i][j] === board[i + 1][j] &&
            board[i][j] === board[i + 2][j]
          ) {
            console.log("winner");
            dispatch(gameResult(board[i][j]));
            setWinner(board[i][j]);
            return;
          }
          console.log("diagonal check");
          if (
            props.size - j > 2 &&
            props.size - i > 2 &&
            board[i][j] === board[i + 1][j + 1] &&
            board[i][j] === board[i + 2][j + 2]
          ) {
            console.log("winner");
            dispatch(gameResult(board[i][j]));
            setWinner(board[i][j]);
            return;
          }
        }
      }
    }
  };

  const onClickCell = () => {
    dispatch(increment());
    if (player.turn === "p1") {
      console.log("in p1");
      dispatch(drawXAction(props.cellIndex));
    } else {
      dispatch(drawYAction(props.cellIndex));
    }
    result();
    dispatch(toggleTurnAction());
  };

  return (
    <div className="square" onClick={() => !props.value && onClickCell()}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Square;
