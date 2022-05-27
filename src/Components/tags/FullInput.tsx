import React, {KeyboardEvent, useRef, useState} from 'react';
import styles from "./../pages/InputPage.module.css"

type FullInputPropsType = {
    callBack: (myRefValue: string) => void

}

export const FullInput = (props: FullInputPropsType) => {
    const[error, setError]=useState(false)

    let myRef = useRef<HTMLInputElement>(null)


    const onClickHandler = () => {
        if (myRef.current && myRef.current.value.trim() !== '') {
            console.log(myRef.current.value)
            props.callBack(myRef.current.value.trim())
            myRef.current.value = ""
            setError(false)
        } else {
            setError(true)
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(false)
        if(event.key ==="Enter"){
            onClickHandler()
        }
    }

    return (
        <div style={{marginTop:'10px'}}>
            <input style={{marginLeft:"15px"}} type={"text"}
                   ref={myRef}
                   onKeyPress={onKeyPressHandler}

            />
            <button onClick={onClickHandler}>+</button>
            {error && <div className={styles.errorMessage}>Field must be Done!</div> }
        </div>
    );
};

