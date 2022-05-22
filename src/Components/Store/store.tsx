import {combineReducers, createStore} from "redux";
import {RoutinesReducerForReduxSingle} from "../reducers/RoutinesReducerForReduxSingle";
import {WeekDaysForReduxDBL} from "../reducers/WeekDaysForReduxDBL";

let rootRuducer=combineReducers({
    RoutinesReducerFRS:RoutinesReducerForReduxSingle,
    WeekDaysForReduxDBL:WeekDaysForReduxDBL
 })

export type rootReducerType=ReturnType<typeof rootRuducer>

export let store=createStore(rootRuducer)

//@ts-ignore
window.store=store
