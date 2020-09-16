export interface Winner {
  side: string | null;
}

export const calculateWinner = (squares: (string | null)[]): Winner | null => {
  const lines: Array<number[]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i in lines) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { side: squares[a] };
    }
  }

  return null;
};
