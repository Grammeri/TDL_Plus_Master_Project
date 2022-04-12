import React, {useEffect, useState} from 'react';

export const UseEffectFunction = () => {
    const [fake,setFake]=useState(1)
    const [counter,setCounter]=useState(1)

    console.log("SimpleExample")

    useEffect(()=>{
        console.log("useEffect every render");
        document.title = counter.toString()
    }) //nothing between })

    useEffect(()=>{
        console.log("useEffect only first render");
        document.title = counter.toString()
    },[]) //empty array }, [])

    useEffect(()=>{
        console.log("useEffect every render");
        document.title = counter.toString()
    },[counter]) //dependency }, [counter})

    return (
        <div>
            Hello,
            <div>fake{fake}</div>
            <div>counter{counter}</div>
            <button onClick={()=>setFake(fake+1)}>fake+</button>
            <button onClick={()=>setCounter(counter+1)}>counter+</button>
        </div>
    );
};

