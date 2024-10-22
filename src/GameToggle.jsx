export default function GameToggle({ turnOf, colors, isWin, isDraw }) {
  let style = {
    backgroundColor: `${turnOf[0] === "X" ? colors.color_x : colors.color_o}`,
    transform: `${turnOf[0] === "X" ? "translateX(0%)" : "translateX(100%)"}`,
  };

  let winStyle = {
    width: "100%",
    transform: "translate(0%)",
    backgroundColor: `${isWin[1] === "X" ? colors.color_x : colors.color_o}`,
  };

  let drawStyle = { ...winStyle, backgroundColor: "#f49595" };

  let final_style = style;
  if (isWin[0]) {
    final_style = winStyle;
  } else if (isDraw) {
    final_style = drawStyle;
  }

  let final_text = turnOf[0];
  if (isWin[0]) {
    final_text = `${isWin[1]} Won`;
  } else if (isDraw) {
    final_text = "Draw";
  }
  return (
    <div className="game_toggle_box">
      <div className="game_toggler" style={final_style}>
        {final_text}
      </div>
    </div>
  );
}
