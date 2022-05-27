import React, {useState} from 'react';
import {v1} from "uuid";
import {TodolistsForAssociativeArray} from "../../ComponentsForTDLVersions/TodolistsForAssociativeArray";
import {FullInput} from "../../tags/FullInput";

export type FilterValuesType = "AllRoutines" | "InProgress" | "Done";

export type WeekdaysPropsTypes = {
    id: string
    title: string
    filter: FilterValuesType
}

export const TDLforAssociativeArray = () => {

    let weekdayID1 = v1();
    let weekdayID2 = v1();

    let [weekdays, setWeekdays] = useState<Array<WeekdaysPropsTypes>>([
        {id: weekdayID1, title: 'Monday', filter: 'AllRoutines'},
        {id: weekdayID2, title: 'Tuesday', filter: 'AllRoutines'},
    ])

    let [routines, setRoutines] = useState({
        [weekdayID1]: [
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
        ],
        [weekdayID2]: [
            {id: v1(), time: "06:00", action: "Wake-up2", isDone: true},
            {id: v1(), time: "06:10", action: "Morning excercises2", isDone: true},
            {id: v1(), time: "06:30", action: "Shower2", isDone: false},
            {id: v1(), time: "07:00", action: "Breakfast2", isDone: true},
            {id: v1(), time: "07:30", action: "Work2", isDone: true},
            {id: v1(), time: "13:00", action: "Lunch2", isDone: true},
            {id: v1(), time: "14:00", action: "Work2", isDone: true},
            {id: v1(), time: "18:00", action: "Dinner2", isDone: true},
            {id: v1(), time: "19:20", action: "Walk2", isDone: true},
            {id: v1(), time: "19:20", action: "Reading2", isDone: true},
            {id: v1(), time: "21:22", action: "Bedtime2", isDone: true},
        ],
    });

    const updateWeekdays = (weekdayID: string, newTitle: string) => {
        setWeekdays(weekdays.map(el => el.id === weekdayID ? {...el, title: newTitle} : el))
        console.log(newTitle, weekdayID)
    }

    const updateRoutines = (weekdayID: string, routineID: string, newTitle: string) => {
        setRoutines({
            ...routines,
            [weekdayID]: routines[weekdayID].map(el => el.id === routineID ? {...el, action: newTitle} : el)
        })
    }

    function removeWeekdays(weekdaysID: string) {
        setWeekdays(weekdays.filter(el => el.id !== weekdaysID))
        delete routines[weekdaysID]
    }

    function removeRoutine(weekdaysID: string, id: string) {
        setRoutines({...routines, [weekdaysID]: routines[weekdaysID].filter(f => f.id !== id)})
    }

    function addRoutine(weekdaysID: string, actionTitle: string) {
        let NewRoutine = {id: v1(), time: "22:00", action: actionTitle, isDone: true};
        /* let newRoutine = [routine, ...routines];
         setRoutine(newRoutine);*/
        setRoutines({...routines, [weekdaysID]: [NewRoutine, ...routines[weekdaysID]]})
    }

    const changeCheckBoxStatus = (weekdaysID: string, newId: string, value: boolean) => {
        /*        setRoutine(routines.map(m => m.id === newId ? {...m, isDone: value} : m))*/
        setRoutines({
            ...routines,
            [weekdaysID]: routines[weekdaysID].map(el => el.id === newId ? {...el, isDone: value} : el)
        })
    }

    function changeFilter(weekdaysID: string, value: FilterValuesType) {
        /*    setFilter(value);*/
        setWeekdays(weekdays.map(el => el.id === weekdaysID ? {...el, filter: value} : el))
    }

    const addWeekdays = (myRefValue: string) => {
        let weekdayID3 = v1();
        let newWeekDay: WeekdaysPropsTypes = {id: weekdayID3, title: myRefValue, filter: 'AllRoutines'}
        setWeekdays([...weekdays, newWeekDay])
        setRoutines({
            ...routines, [weekdayID3]: [
                {id: v1(), time: "19:20", action: "Walk", isDone: true},
                {id: v1(), time: "19:20", action: "Reading", isDone: true},
                {id: v1(), time: "21:22", action: "Bedtime", isDone: true},
            ]
        })

    }


    return (
        <div>
            <FullInput callBack={addWeekdays}/>
            <div style={{display: 'flex'}}>

                {weekdays.map(el => {
                    let routinesForWeekday = routines[el.id];

                    if (el.filter === "InProgress") {
                        routinesForWeekday = routines[el.id].filter(f => f.isDone === false);
                    }
                    if (el.filter === "Done") {
                        routinesForWeekday = routines[el.id].filter(f => f.isDone === true);
                    }
                    return (
                        <TodolistsForAssociativeArray
                            key={el.id}
                            title={el.title}
                            routines={routinesForWeekday}
                            removeRoutine={removeRoutine}
                            changeFilter={changeFilter}
                            addRoutine={addRoutine}
                            changeCheckBoxStatus={changeCheckBoxStatus}
                            filter={el.filter}
                            weekdaysID={el.id}//Я херачил weekdaysID
                            removeWeekdays={removeWeekdays}
                            updateWeekdays={updateWeekdays}
                            updateRoutines={updateRoutines}
                        />
                    )
                })}
            </div>
        </div>

    );
};
