import React, {ChangeEvent} from 'react';

type CheckboxPropsType = {
    isDone: boolean
    callBack: (eventValue:boolean) => void
}

export const Checkbox = (props: CheckboxPropsType) => {
    const onChangeCheckHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={props.isDone}
               onChange={onChangeCheckHandler}/>
    )
};

