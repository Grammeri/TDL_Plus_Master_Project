import React, {ChangeEvent, useRef, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack:(title:string)=>void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const setSpan = () => {
        setEdit(!edit)
        props.callBack(newTitle)
    }

    return (
        edit
            ? <input onChange={onChangeHandler} onBlur={setSpan} value={newTitle} autoFocus/>
            : <span style={{marginLeft:"15px"}} onDoubleClick={setSpan}>{props.title}</span>
    );
};
