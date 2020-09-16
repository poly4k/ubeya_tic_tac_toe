import React, { FunctionComponent } from "react";
import { Cell } from "./Cell";
import * as d3 from 'd3';

export const Board: FunctionComponent<{
  cells: (string | null)[];
  onclick: (x: number) => void;
  winner: string | null;
}> = ({ cells, onclick, winner }) => {
  return (
    <div className="board">
      {cells.map((cell: null | string, i: number) => (
        <Cell
          key={i}
          index={i}
          value={cell}
          winner={!!winner}
          onclick={onclick}
        ></Cell>
      ))}
    </div>
  );
};
