import { useState } from "react";
import GameGridCell from "./GameGridCell";

export default function GameGrid(){
    return(
        <div className="game_grid">
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
            <GameGridCell />
        </div>
    )
}