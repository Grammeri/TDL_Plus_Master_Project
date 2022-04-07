import React, {useState} from 'react';

export const Counter = () => {
    const [counter, setCounter]=useState(0)
    const increment = ()=> {
        setCounter(prevCounter => prevCounter + 1)
    }
    const decrement = () => {
        setCounter(prevCounter => prevCounter - 1)
    }
    return (
        <div>
            <div style={{alignItems:"center"}}>{counter}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button>Was rendered:{}</button>
        </div>
    );
};

