import { useState } from "react";
import ColorsSelector from "./ColorsSelector";
import Game from "./Game";

export default function App() {
  let [gameStatus, setGameStatus] = useState("colorSelecting");
  let [colors, setColors] = useState({
    color_x: "#bfbde2",
    color_o: "#bfdbc8",
  });
  return (
    <>
      <ColorsSelector
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
        colors={colors}
        setColors={setColors}
      />
      <Game
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        colors={colors}
        setColors={setColors}
      />
    </>
  );
}
