import GameGrid from "./GameGrid";
import GameToggle from "./GameToggle";

export default function Game({gameStatus,setGameStatus}){
    let className = "game";
    className = `${className} ${gameStatus==="colorSelecting" ? "blur" : ""}`;
    return(
        <div className={className}>
            <GameToggle/>
            <GameGrid/>
            <button type="button" id="reset_button" onClick={()=> setGameStatus("colorSelecting")}>Reset Game</button>
        </div>
    )
}