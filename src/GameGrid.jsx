import GameGridCell from "./GameGridCell";

export default function GameGrid({
  turnOf,
  setTurnOf,
  cellsArray,
  setCellsArray,
  isWin,
  colors,
}) {
  function handleCellClick(index) {
    setCellsArray(
      cellsArray.map((val, idx) => {
        if (idx == index) {
          return { text: turnOf[0], isActive: false };
        } else {
          return val;
        }
      })
    );
    setTurnOf([turnOf[0] === "X" ? "O" : "X", turnOf[1] + 1]);
  }

  let game_grid_cell_array = cellsArray.map((val, idx) => (
    <GameGridCell
      key={idx}
      text={val.text}
      isActive={val.isActive}
      index={idx}
      handleCellClick={handleCellClick}
      isWin={isWin}
      colors={colors}
    />
  ));
  return <div className="game_grid">{game_grid_cell_array}</div>;
}
