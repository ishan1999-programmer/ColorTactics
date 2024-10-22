import { useState } from "react";

export default function ColorsSelector({
  gameStatus,
  setGameStatus,
  colors,
  setColors,
}) {
  let className = "game_overlay";
  className = `${className} ${gameStatus === "playing" ? "translate" : ""}`;
  return (
    <div className={className}>
      <h1>Choose Custom Colors for your X and O</h1>
      <br />
      <label htmlFor="color_selector_x">Choose a Color for X:</label>
      <input
        type="color"
        id="color_selector_x"
        value={colors.color_x}
        onChange={(e) => setColors({ ...colors, color_x: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="color_selector_o">Choose a Color for O:</label>
      <input
        type="color"
        id="color_selector_o"
        value={colors.color_o}
        onChange={(e) => setColors({ ...colors, color_o: e.target.value })}
      />
      <div className="x_o_box">
        <p style={{ color: `${colors.color_x}` }}>X</p>
        <p style={{ color: `${colors.color_o}` }}>O</p>
      </div>
      <button
        type="button"
        id="start_game"
        onClick={() => setGameStatus("playing")}
      >
        Start the game
      </button>
    </div>
  );
}
