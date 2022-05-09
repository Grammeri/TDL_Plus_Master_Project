import {RoutineType} from "../ComponentsForTDLVersions/TodolistsForReducer";

export const RoutinesReducer = (state: Array<RoutineType>, action: RoutinesReducerACType) => {
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