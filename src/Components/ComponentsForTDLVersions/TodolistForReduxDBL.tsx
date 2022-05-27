import React from 'react';
import Button from "@mui/material/Button";
import {FilterValuesType} from "../pages/TodolistVersions/TDLAssociative";
import {FullInput} from "../tags/FullInput";
import {EditableSpan} from "../tags/EditableSpan";

export type RoutineType = {
    id: string
    time: string
    action: string
    isDone: boolean
}

type PropsType = {
    title: string
    routines: Array<RoutineType>
    removeRoutine: (weekdaysID: string, id: string) => void
    changeFilterForWeekDays: (weekdaysID: string, value: FilterValuesType) => void
    addRoutine: (weekdaysID: string, actionTitle: string) => void
    changeCheckBoxStatus: (weekdaysID: string, newId: string, value: boolean) => void
    filter: FilterValuesType
    weekdaysID: string
    removeWeekdays: (weekdaysID: string) => void
    updateWeekdays: (weekdayID: string, newTitle: string) => void
    updateRoutines:(weekdayID:string,routineID:string,newTitle:string)=>void
}

export const TodolistForReduxDBL = (props: PropsType) => {
    const addRoutineHandler = (actionTitle: string) => {
        // if (title.trim() !== '') {
        //     props.addRoutine(props.weekdaysID, title.trim())
        //     setTitle('')
        // }
        props.addRoutine(props.weekdaysID, actionTitle)
    }

    const setFilters = (filterValue: FilterValuesType) => {
        props.changeFilterForWeekDays(props.weekdaysID, filterValue)
    }
    const onClickRemoveHandler = (tID: string) => {
        props.removeRoutine(props.weekdaysID, tID)
    }
    const CheckboxHandler = (tID: string, checkBoxValue: boolean) => {
        props.changeCheckBoxStatus(props.weekdaysID, tID, checkBoxValue)
    }
    const removeWeekdaysHandler = () => {
        props.removeWeekdays(props.weekdaysID)
    }

    const callBackForupdateWeekdays = (newTitle: string) => {
        props.updateWeekdays(props.weekdaysID, newTitle)
    }

    const callBackForupdateRoutines=(routineID:string,newTitle:string)=>{
        props.updateRoutines(props.weekdaysID,routineID,newTitle)
        //weekdayID:string,routineID:string,newTitle:string
    }

    return (
        <div style={{marginLeft: '20px'}}>
            <h3>
                <EditableSpan callBack={callBackForupdateWeekdays} title={props.title}/>
                {/*{props.title}*/}
                <button onClick={removeWeekdaysHandler}>X</button>
            </h3>
            <FullInput callBack={addRoutineHandler}/>
            <ul>
                {
                    props.routines.map(t => {
                        return (
                            <li key={t.id}>
                                <button onClick={() => onClickRemoveHandler(t.id)}>x</button>
                                <input type="checkbox" checked={t.isDone}
                                       onChange={(e) => CheckboxHandler(t.id, e.currentTarget.checked)}/>
                                <span>{t.time}</span>
                                {/*<span>-{t.action}</span>*/}
                                <EditableSpan callBack={(title:string)=>callBackForupdateRoutines(t.id, title)} title={t.action}/>

                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <Button size="small" color="success" onClick={() => setFilters('AllRoutines')} variant="contained">All
                    routines</Button>
                <Button size="small" color="error" onClick={() => setFilters('InProgress')} variant="contained">In
                    progress</Button>
                <Button size="small" onClick={() => setFilters('Done')} variant="contained">done</Button>

            </div>
        </div>
    );
};

