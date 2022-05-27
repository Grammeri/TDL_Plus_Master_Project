import React, {useState} from 'react';
import {ButtonUniversal} from "../tags/ButtonUniversal";

export const Counter = () => {

    const [counter, setCounter]=useState(0)

    const addNumber = () => {
        setCounter(counter+ 1)
    }



    return (
        <div style={{textAlign:'center',marginLeft:'50px'}}>
            <h1>number:{counter}</h1>
            {/*<button style={{padding:'0 40px'}} onClick={addNumber}>+</button>*/}
            <ButtonUniversal name={"+"} callBack={addNumber}/>
        </div>

    );
};

