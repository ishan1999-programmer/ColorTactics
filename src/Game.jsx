import { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import GameToggle from "./GameToggle";

export default function Game({ gameStatus, setGameStatus, colors }) {
  let [turnOf, setTurnOf] = useState(["X", 0]);
  let [cellsArray, setCellsArray] = useState(intial_cells_array);
  let [isWin, setIsWin] = useState([false, ""]);
  let [isDraw, setIsDraw] = useState(false);

  let className = "game";
  className = `${className} ${gameStatus === "colorSelecting" ? "blur" : ""}`;

  let style = {
    boxShadow: `0px 0px 15px 15px ${
      turnOf[0] === "X" ? colors.color_x : colors.color_o
    }`,
  };

  let winStyle = {
    boxShadow: `${
      isWin[1] === "X"
        ? `0px 0px 15px 15px ${colors.color_x}`
        : `0px 0px 15px 15px ${colors.color_o}`
    }`,
  };

  let drawStyle = { boxShadow: `0px 0px 15px 15px #f49595` };

  let final_style = style;
  if (isWin[0]) {
    final_style = winStyle;
  } else if (isDraw) {
    final_style = drawStyle;
  }

  function handleResetClick() {
    setGameStatus("colorSelecting");
    setTurnOf(["X", 0]);
    setCellsArray(intial_cells_array);
    setIsWin([false, ""]);
    setIsDraw(false);
  }

  useEffect(() => {
    for (let combination of winningCombinations) {
      let [a, b, c] = combination;
      if (
        cellsArray[a].text === cellsArray[b].text &&
        cellsArray[b].text === cellsArray[c].text &&
        cellsArray[a].text !== ""
      ) {
        setIsWin([true, cellsArray[a].text]);
        return;
      }
    }
    if (turnOf[1] == 9) {
      setIsDraw(true);
    }
  }, cellsArray);

  return (
    <div className={className} style={final_style}>
      <GameToggle
        turnOf={turnOf}
        colors={colors}
        isWin={isWin}
        isDraw={isDraw}
      />
      <GameGrid
        turnOf={turnOf}
        setTurnOf={setTurnOf}
        colors={colors}
        cellsArray={cellsArray}
        setCellsArray={setCellsArray}
        isWin={isWin}
      />
      <button type="button" id="reset_button" onClick={handleResetClick}>
        Reset Game
      </button>
    </div>
  );
}

let intial_cells_array = [];
for (let i = 0; i < 9; i++) {
  intial_cells_array.push({ text: "", isActive: true });
}

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
