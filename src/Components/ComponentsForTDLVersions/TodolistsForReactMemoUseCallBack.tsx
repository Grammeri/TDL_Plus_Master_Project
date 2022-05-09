import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {FilterValuesType} from "../pages/TodolistVersions/TDLforReactMemoUseCallBack";
import Button from "@mui/material/Button";


export type RoutineType = {
    id: string
    time: string
    action:string
    isDone: boolean
}

type PropsType = {
    title: string
    routines: Array<RoutineType>
    removeRoutine: (routineId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addRoutine: (title: string) => void
    changeCheckBoxStatus: (newId: string, value: boolean) => void
}

export const TodolistsForReactMemoUseCallBack = React.memo((props: PropsType) => {

    let [title, setTitle] = useState("")

    // const addRoutine = useCallback( () => {
    //     props.addRoutine(title);
    // },[props.addRoutine])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addRoutineHandler();
            setTitle('')
        }
    }

    const addRoutineHandler =() => {
        if (title.trim() !== '') {
            props.addRoutine(title.trim())
            setTitle('')
        }
    }

    const setFilters = useCallback( (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    },[props.changeFilter])

    const onClickRemoveHandler =useCallback( (tID: string) => {
        props.removeRoutine(tID)
    },[props.removeRoutine])



    const CheckboxHandler = useCallback( (tID: string, checkBoxValue: boolean) => {
        props.changeCheckBoxStatus(tID, checkBoxValue)
    },[props.changeCheckBoxStatus])

    return (
        <div style={{marginLeft: '20px'}}>
            <h3>{props.title}</h3>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addRoutineHandler}>+</button>
            <ul>
                {
                    props.routines.map(t => {
                        return (
                            <li key={t.id}>
                                <button onClick={() => onClickRemoveHandler(t.id)}>x</button>
                                <input type="checkbox" checked={t.isDone}
                                       onChange={(e) => CheckboxHandler(t.id, e.currentTarget.checked)}/>
                                <span>{t.time}</span>
                                <span>{t.action}</span>

                            </li>
                        )
                    })
                }
            </ul>
            <div>


                <Button size="small" color="success" onClick={() => setFilters('All routines')} variant="contained">All routines</Button>
                <Button size="small" color="error" onClick={() => setFilters('In progress')} variant="contained">In progress</Button>
                <Button size="small" onClick={() => setFilters('Done')} variant="contained">done</Button>

            </div>
        </div>
    );
});




