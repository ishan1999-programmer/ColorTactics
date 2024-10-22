import { useState } from "react";

export default function GameGridCell({
  turnOf,
  setTurnOf,
  colors,
  text,
  isActive,
  index,
  handleCellClick,
  isWin,
}) {
  let style = { pointerEvents: `${isActive ? "all" : "none"}` };
  let winStyle = { pointerEvents: "none" };
  return (
    <button
      id="grid_button"
      style={isWin[0] ? winStyle : style}
      onClick={() => handleCellClick(index)}
    >
      {text}
    </button>
  );
}
