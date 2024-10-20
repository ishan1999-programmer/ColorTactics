import { useState } from "react"
import ColorsSelector from "./ColorsSelector"
import Game from "./Game"

export default function App(){
  let [gameStatus,setGameStatus] = useState("colorSelecting");
  return (
    <>
        <ColorsSelector setGameStatus={setGameStatus} gameStatus={gameStatus} />
        <Game gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </>
  )
}