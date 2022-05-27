import React, {ChangeEvent,KeyboardEvent, useRef, useState} from 'react';
import {FullInput} from "../tags/FullInput";


export const InputPage = () => {
/*    let myRef = useRef<HTMLInputElement>(null)*/

    let [string, setString] = useState([''])
    console.log(string)

    /*const onClickHandler = () => {
        if (myRef.current && myRef.current.value.trim()!=='') {
            setString([...string, myRef.current.value.trim()])
            myRef.current.value = ""
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) =>{
       if(event.key ==="Enter"){
           onClickHandler()
       }
    }*/

    const addString = (myRefValue:string) => {
       setString([...string, myRefValue])
        console.log(myRefValue)
    }

    return (
        <div style={{marginLeft: "50px"}}>
           {/* <input type={"text"}
                   ref={myRef}
            onKeyPress={onKeyPressHandler}

            />
            <button onClick={onClickHandler}>+</button>*/}
            <FullInput callBack={addString}/>

            <div>
                {string.map((element)=>{
                    return(
                        <div>{element}</div>
                    )
                })}
            </div>
        </div>
    );
};
