import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {

    const [hits, setHits] = useState(0);
    const [strikes, setStrikes] =useState(0);
    const [fouls, setFouls] = useState(0);
    const [balls, setBalls] =useState(0);

    const hitHandler = (e) => {
        e.preventDefault()
        setHits(hits + 1);
    }

    const strikeHandler = (e) => {
        e.preventDefault()

        console.log('button clicked')

        return   strikes === 0 ? setStrikes(1)
                : strikes === 1 ? setStrikes(2)                            
                : setStrikes(0);
    }

    const foulHandler = (e) => {
        e.preventDefault()

                if(strikes === 2) {                                        
                    setFouls(0);
                    setStrikes(0)
                }else{
                    setFouls(fouls + 1)
                }
    }

    const ballHandler = (e) => {
        e.preventDefault()

                if(balls === 0) {
                    setBalls(1)
                }else if(balls === 1){
                    setBalls(2)
                }else if(balls === 2){
                    setBalls(3)
                }else{
                    setBalls(0);
                }
    }

    return(
        <div>
            <Display score={hits} strikes={strikes} fouls={fouls} balls={balls} />
            <button onClick={hitHandler} >Hits</button>
            <button onClick={strikeHandler} >Strikes</button>
            <button onClick={foulHandler} >Fouls</button>
            <button onClick={ballHandler} >Balls</button>
        </div>
    )
}
export default Dashboard;