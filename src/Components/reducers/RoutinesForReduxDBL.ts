import {useState} from "react";
import {v1} from "uuid";
import {RoutineType} from "../ComponentsForTDLVersions/TodolistForReduxDBL";

export type RoutinesForReduxDBLType = {
    [key: string]: Array<RoutineType>
}


let weekdayID1 = 'weekdayID1'
let weekdayID2 = 'weekdayID2'

let initialState: RoutinesForReduxDBLType = {
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
};

export const RoutinesForReduxDBL = (state = initialState, action: RoutinesForReduxDBLTsarType) => {
    switch (action.type) {
        case "UPDATE-ROUTINES": {
            return {
                ...state,
                [action.payload.weekdayID]: state[action.payload.weekdayID].map(el => el.id === action.payload.routineID ? {
                    ...el,
                    action: action.payload.newTitle
                } : el)
            }
        }
        case "REMOVE-WEEKDAYS": {
            const copyState = {...state};
            delete copyState[action.payload.weekdaysID];
            return state
        }
        case "REMOVE-ROUTINE": {
            return {
                ...state,
                [action.payload.weekdaysID]: state[action.payload.weekdaysID].filter(el => el.id !== action.payload.routineID)
            }
        }
        case "ADD-ROUTINE": {
            let NewRoutine = {id: v1(), time: "22:00", action: action.payload.actionTitle, isDone: true};
            return {...state, [action.payload.weekdaysID]: [NewRoutine, ...state[action.payload.weekdaysID]]}
        }
        case "CHANGE-CHECKBOX-ROUTINE": {
            return {
                ...state,
                [action.payload.weekdaysID]: state[action.payload.weekdaysID].map(el => el.id === action.payload.routineID
                    ? {...el,isDone:action.payload.value}
                    : el
                )
            }
        }
        default:
            return state
    }
}

type RoutinesForReduxDBLTsarType = updateRoutinesACType
    | removeWeekdaysForRoutinesReducerACType
    | removeRoutineACType
    | addRoutineACType
    | changeCheckBoxStatusRoutineACType

type updateRoutinesACType = ReturnType<typeof updateRoutinesAC>
export const updateRoutinesAC = (weekdayID: string, routineID: string, newTitle: string) => {
    return {
        type: "UPDATE-ROUTINES",
        payload: {
            weekdayID,
            routineID,
            newTitle
        }
    } as const
}

type removeWeekdaysForRoutinesReducerACType = ReturnType<typeof removeWeekdaysForRoutinesReducerAC>
export const removeWeekdaysForRoutinesReducerAC = (weekdaysID: string) => {
    return {
        type: 'REMOVE-WEEKDAYS',
        payload: {weekdaysID}
    } as const
}

type removeRoutineACType = ReturnType<typeof removeRoutineAC>
export const removeRoutineAC = (weekdaysID: string, routineID: string) => {
    return {
        type: "REMOVE-ROUTINE",
        payload: {weekdaysID, routineID}
    } as const
}


type addRoutineACType = ReturnType<typeof addRoutineAC>

export const addRoutineAC = (weekdaysID: string, actionTitle: string) => {
    return {
        type: "ADD-ROUTINE",
        payload: {
            weekdaysID,
            actionTitle
        }

    } as const
}

type changeCheckBoxStatusRoutineACType = ReturnType<typeof changeCheckBoxStatusRoutineAC>
export const changeCheckBoxStatusRoutineAC = (weekdaysID: string, routineID: string, value: boolean) => {
    return {
        type: "CHANGE-CHECKBOX-ROUTINE",
        payload: {weekdaysID, routineID, value}
    } as const
}

