import React, { FunctionComponent, useState } from "react";
import { calculateWinner } from "../utils/functions";
import { Board } from "./Board";

export const Game: FunctionComponent = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [score, setScore] = useState<{ [x: string]: number }>({ X: 0, O: 0 });
  const [turn, setTurn] = useState("X");

  const playAgain = () => {
    setTurn("X");

    setBoard(Array(9).fill(null));

    setWinner(null);
  };

  const onClick = (key: number): void => {
    if (board[key]) return;

    let boardCopy = [...board];

    boardCopy[key] = turn;

    setBoard(boardCopy);

    const win = calculateWinner(boardCopy);

    if (win) {
      if (score) {
        let copy = score;
        copy[win.side!] ? (copy[win.side!] += 1) : (copy[win.side!] = 1);
        setScore(copy);
      } else {
        let init = {
          [win.side!]: 1,
          [win.side === "X" ? "O" : "X"]: 0,
        };
        setScore(init);
      }

      setWinner(win.side);

      return;
    } else {
      if (boardCopy.filter((x) => x !== null).length === 9) {
        setWinner("draw");
        return;
      }
    }

    turn === "X" ? setTurn("O") : setTurn("X");
  };

  return winner === null ? (
    <div className="board-wrapper">
      <div className="scoreboard">
        X: {score.X} | O: {score.O}
      </div>
      <Board winner={winner} cells={board} onclick={onClick} />
    </div>
  ) : (
    <div className="board-wrapper">
      <div className="scoreboard">
        X: {score.X > 0 ? score.X : 0} | O: {score.O ? score.O : 0}
      </div>
      <Board
        winner={winner}
        cells={board}
        onclick={onClick}
      />
      <button className="begin-btn" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};
