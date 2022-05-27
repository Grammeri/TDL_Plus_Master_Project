import {FilterValuesType, WeekdaysPropsTypes} from "../pages/TodolistVersions/TDLforReduxDBL";


let initialState:Array<WeekdaysPropsTypes>= [
    {id: 'weekdayID1', title: 'Monday', filter: 'AllRoutines'},
    {id: 'weekdayID2', title: 'Tuesday', filter: 'AllRoutines'},
]


export const WeekDaysForReduxDBL=(state=initialState,
                                  action:actionTypeForWeekDays)=>{
    switch (action.type) {
        case "UPDATE-WEEKDAYS":{
            // setWeekdays(weekdays.map(el => el.id === weekdayID ? {...el, title: newTitle} : el))
            return state.map(el => el.id === action.payload.weekdayID ? {...el, title: action.payload.newTitle} : el)
        }
        case "REMOVE-WEEKDAYS":{
            return state.filter(el=>el.id!==action.payload.weekdaysID)
        }
        case "CHANGE-FILTER-WEEKDAYS":{
            return state.map(el=>el.id===action.payload.weekdaysID ? {...el, filter:action.payload.value}:el)
        }
        case "ADD-WEEKDAYS":{
            return [action.payload.newWeekDay, ...state]
        }

        default:return state
    }
}

type actionTypeForWeekDays = WeekDaysForReduxDBLType
    | removeWeekdaysACType
    | changeFilterForWeekDaysACType
    | addWeekdaysACType
type WeekDaysForReduxDBLType = ReturnType<typeof  updateWeekdaysAC>
export const updateWeekdaysAC=(weekdayID: string, newTitle: string) =>{
    return{
        type:"UPDATE-WEEKDAYS",
        payload:{
         weekdayID,
         newTitle
        }
    }as const
}

type removeWeekdaysACType = ReturnType<typeof removeWeekdaysAC>
export const removeWeekdaysAC = (weekdaysID: string) =>{
    return {
        type: "REMOVE-WEEKDAYS",
        payload: {
            weekdaysID
        }
    }as const
}

type changeFilterForWeekDaysACType = ReturnType<typeof changeFilterForWeekDaysAC>
export const changeFilterForWeekDaysAC=(weekdaysID:string, value:FilterValuesType)=>{
    return {
        type: "CHANGE-FILTER-WEEKDAYS",
        payload:{
            weekdaysID,
            value
        }
    }as const
}

type addWeekdaysACType = ReturnType<typeof addWeekdaysAC>
export const addWeekdaysAC=(newWeekDay:WeekdaysPropsTypes)=>{
    return{
        type:"ADD-WEEKDAYS",
        payload: {
            newWeekDay
        }
    }as const
}