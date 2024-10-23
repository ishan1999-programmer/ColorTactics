export default function GameToggle({ turnOf, colors, isWin, isDraw }) {
  let style = {
    backgroundColor: `${turnOf[0] === "X" ? colors.color_x : colors.color_o}`,
    left: `${turnOf[0] === "X" ? "0%" : "50%"}`,
    transform: "scale(1)",
  };

  let text = turnOf[0];
  let winDrawText = "";
  let winDrawStyle = { backgroundColor: "#ffffff", transform: "scale(0)" };

  if (isWin[0] || isDraw) {
    style = { ...style, transform: "scale(0)" };

    if (isWin[0]) {
      winDrawStyle = {
        backgroundColor: `${
          isWin[1] === "X" ? colors.color_x : colors.color_o
        }`,
        transform: "scale(1)",
      };
      winDrawText = `${isWin[1]} Won`;
    } else {
      winDrawStyle = { backgroundColor: "#f49595", transform: "scale(1)" };
      winDrawText = "Draw";
    }
  }
  return (
    <div className="game_toggle_box">
      <div className="game_toggler_win_draw" style={winDrawStyle}>
        {winDrawText}
      </div>
      <div className="game_toggler" style={style}>
        {text}
      </div>
    </div>
  );
}
