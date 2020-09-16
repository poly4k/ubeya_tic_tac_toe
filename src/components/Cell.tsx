import React, { FunctionComponent } from "react";

export const Cell: FunctionComponent<{
  value: null | string;
  onclick: (x: number) => void;
  index: number;
  winner: boolean;
}> = ({ value, onclick, index, winner }) => {
  return (
    <button
      disabled={winner}
      id={"Cell" + index}
      onClick={() => onclick(index)}
    >
      {value ? value : ""}
    </button>
  );
};
