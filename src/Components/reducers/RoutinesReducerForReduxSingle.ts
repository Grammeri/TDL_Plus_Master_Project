import {RoutineType} from "../ComponentsForTDLVersions/TodolistsForReducer";
import {v1} from "uuid";

export let intialState:Array<RoutineType>=[
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
]

export const RoutinesReducerForReduxSingle = (state= intialState , action: RoutinesReducerACType) => {
    switch (action.type) {
        case 'REMOVE_ROUTINE': {
            return state.filter(f => f.id !== action.id)
        }
        case "ADD-ROUTINE":{
            return [action.payload.NewRoutine,...state]
        }
        case "CHANGE_CHECK_BOX_STATUS":{
            // return state
            // let newState=[...state]
            // return state.map(el=>el.id===action.newID ? {...el, isDone: action.value} : el)
            return state.map(m=>m.id===action.newID ?{...m,isDone:action.value}:m)
        }
        default:
            return state
    }
}

type  RoutinesReducerACType = removeRoutineACType | addRoutineACType|ChangeCheckBoxStatusACType
type removeRoutineACType = ReturnType<typeof removeRoutineAC>

export let removeRoutineAC = (id: string) => {
    return {
        type: 'REMOVE_ROUTINE',
        id: id
    } as const
}

type addRoutineACType=ReturnType<typeof addRoutineAC>
export const addRoutineAC = (title: string,NewRoutine: RoutineType) => {
    return {
        type: 'ADD-ROUTINE',
        payload: {title,NewRoutine}
    } as const
}


type ChangeCheckBoxStatusACType=ReturnType<typeof ChangeCheckBoxStatusAC>

export let ChangeCheckBoxStatusAC=(newID:string,value:boolean)=>{
    return{
        type:'CHANGE_CHECK_BOX_STATUS',
        newID,
        value
    }as const
}