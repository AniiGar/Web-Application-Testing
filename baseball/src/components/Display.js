// Score 
// Strikesd
// onClick() - Dashboard
// 3 Strikes limit

import React, { useState } from 'react';


const Display = (props) => {
   
    return(
        <div>
            <h1>Scoreboard</h1>
            <p>Score: {props.score}</p>
            <p>Strikes: {props.strikes}</p>
            <p>Fouls: {props.fouls}</p>
            <p>balls: {props.balls}</p>
        </div>
    )
}
export default Display;