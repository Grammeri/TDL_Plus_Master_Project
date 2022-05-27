import React from 'react'



type ButtonTypeProps = {
    name: string,
    callBack: () => void
}

export const ButtonUniversal = (props: ButtonTypeProps) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>

    );
};

