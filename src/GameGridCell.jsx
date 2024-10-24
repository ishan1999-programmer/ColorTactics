export default function GameGridCell({
  text,
  isActive,
  index,
  handleCellClick,
  isWin,
  colors,
}) {
  let style = { pointerEvents: `${isActive ? "all" : "none"}` };
  let backgroundColor = "";
  if (isWin[0] && isWin[2].includes(index)) {
    backgroundColor = isWin[1] === "X" ? colors.color_x : colors.color_o;
    console.log(backgroundColor);
  }
  let winStyle = {
    pointerEvents: "none",
    backgroundColor: `${backgroundColor}`,
  };
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
