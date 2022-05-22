import React, {KeyboardEvent, useRef, useState} from 'react';
import styles from "./../pages/InputPage.module.css"

type FullInputPropsType = {
    callBack: (myRefValue: string) => void

}

export const UniversalInput = React.memo((props: FullInputPropsType) => {
    console.log('UniversalInput')

    const[error, setError]=useState(false)

    let myRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        if (myRef.current && myRef.current.value.trim() !== '') {
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
        <div style={{marginTop:'50px'}}>
            <input type={"text"}
                   ref={myRef}
                   onKeyPress={onKeyPressHandler}

            />
            <button onClick={onClickHandler}>+</button>
            {error && <div className={styles.errorMessage}>Field must be Done!</div> }
        </div>
    );
});

