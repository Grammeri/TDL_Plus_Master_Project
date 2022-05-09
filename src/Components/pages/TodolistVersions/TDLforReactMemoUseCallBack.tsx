import React, {useCallback, useState} from 'react';
import {v1} from "uuid";
import {TodolistsForReactMemoUseCallBack} from "../../ComponentsForTDLVersions/TodolistsForReactMemoUseCallBack";

export type FilterValuesType = "All routines" | "In progress" | "Done";

export const TDLforReactMemoUseCallBack = () => {


    let [routines, setRoutine] = useState([
        {id: v1(), time: "06:00", action: "Wake-up", isDone: true},
        {id: v1(), time: "06:10", action: "Morning excercises", isDone: true},
        {id: v1(), time: "06:30", action: "Shower", isDone: false},
        {id: v1(), time: "07:00", action: "Breakfast", isDone: true},
        {id: v1(), time: "07:30", action: "Work", isDone: true},
        {id: v1(), time: "13:00", action: "Lunch", isDone: true},
        {id: v1(), time: "14:00", action: "Work", isDone: true},
        {id: v1(), time: "18:00", action: "Dinner", isDone: true},
        {id: v1(), time: "19:20", action: "Walk", isDone: true},
        {id: v1(), time: "19:20", action: "Reading", isDone: true},
        {id: v1(), time: "21:22", action: "Bedtime", isDone: true},
    ])


    const removeRoutine = (id: string) => {
        // let filteredRoutine = routines.filter(t => t.id != id);
        console.log("Routine removed")
        setRoutine(routines.filter(t => t.id != id));
    }


    const addRoutine = (title: string) => {
        let routine = {id: v1(), time: "22:00", action: title, isDone: true};
        let newRoutine = [routine, ...routines];
        setRoutine(newRoutine);
    }

    const changeCheckBoxStatus = useCallback((newId: string, value: boolean) => {
        console.log("CheckBox checked")
        setRoutine(routines.map(m => m.id === newId ? {...m, isDone: value} : m))
    }, [])

    let [filter, setFilter] = useState<FilterValuesType>("All routines");

    let routineForTodolist = routines;

    if (filter === "In progress") {
        routineForTodolist = routines.filter(t => t.isDone === false);
    }
    if (filter === "Done") {
        routineForTodolist = routines.filter(t => t.isDone === true);
    }

    const changeFilter = useCallback((value: FilterValuesType) => {
        setFilter(value);
    }, [])


    return (
        <div style={{display: 'flex'}}>
            <TodolistsForReactMemoUseCallBack
                title="What to learn"
                routines={routineForTodolist}
                removeRoutine={removeRoutine}
                changeFilter={changeFilter}
                addRoutine={addRoutine}
                changeCheckBoxStatus={changeCheckBoxStatus}
            />

        </div>
    );
};
