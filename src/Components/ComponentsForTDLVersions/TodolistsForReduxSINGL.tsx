import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {FilterValuesType} from "../pages/TodolistVersions/TDLforReduxSINGL";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {addRoutineAC, ChangeCheckBoxStatusAC, removeRoutineAC} from "../reducers/RoutinesReducer";
import {v1} from "uuid";
import {UniversalInput} from "./UniversalInput";

export type RoutineType = {
    id: string
    time: string
    action: string
    isDone: boolean
}

type PropsType = {
    title: string
}

export const TodolistsForReduxSINGL = React.memo((props: PropsType) => {
    let dispatch = useDispatch()
    let routines = useSelector<rootReducerType, Array<RoutineType>>(select => select.RoutinesReducerFRS)
    let [filter, setFilter] = useState<FilterValuesType>("All routines");
    //let [title, setTitle] = useState("")

    let routineForTodolist = routines;

    if (filter === "In progress") {
        routineForTodolist = routines.filter(t => t.isDone === false);
    }
    if (filter === "Done") {
        routineForTodolist = routines.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    function removeRoutine(id: string) {
        // let filteredRoutine = routines.filter(t => t.id != id);
        // setRoutine(filteredRoutine);
        dispatch(removeRoutineAC(id))
    }

    const addRoutine=useCallback((title: string) =>{
        let NewRoutine = {id: v1(), time: "22:00", action: title, isDone: true};
        // let newRoutine = [routine, ...routines];
        // setRoutine(newRoutine);
        dispatch(addRoutineAC(title, NewRoutine))
    },[dispatch])

    const changeCheckBoxStatus = useCallback((newId: string, value: boolean) => {
        // setRoutine(routines.map(m=>m.id===newId ? {...m, isDone: value} : m))
        dispatch(ChangeCheckBoxStatusAC(newId, value))
    },[dispatch])

    const setFilters = useCallback((filterValue: FilterValuesType) => {
        changeFilter(filterValue)
    },[setFilter])

    return (
        <div style={{marginLeft: '20px'}}>
            <h3>{props.title}</h3>
            {/*<input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>*/}
            {/*<button onClick={addRoutineHandler}>+</button>*/}
            <UniversalInput callBack={addRoutine}/>
            <ul>
                {
                    routineForTodolist.map(t => {

                        return (
                            <li key={t.id}>
                                <button onClick={() => removeRoutine(t.id)}>x</button>
                                <input type="checkbox" checked={t.isDone}
                                       onChange={(e) => changeCheckBoxStatus(t.id, e.currentTarget.checked)}/>

                                <span>{t.time}</span>
                                <span>{t.action}</span>

                            </li>
                        )
                    })
                }
            </ul>
            <div>

                <Button size="small" color="success" onClick={() => setFilters('All routines')} variant="contained">All
                    routines</Button>
                <Button size="small" color="error" onClick={() => setFilters('In progress')} variant="contained">In
                    progress</Button>
                <Button size="small" onClick={() => setFilters('Done')} variant="contained">done</Button>

            </div>
        </div>
    );
});


