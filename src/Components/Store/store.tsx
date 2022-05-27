import {combineReducers, createStore} from "redux";
import {RoutinesReducerForReduxSingle} from "../reducers/RoutinesReducerForReduxSingle";
import {WeekDaysForReduxDBL} from "../reducers/WeekDaysForReduxDBL";
import {RoutinesForReduxDBL} from "../reducers/RoutinesForReduxDBL";

let rootRuducer=combineReducers({
    RoutinesReducerFRS:RoutinesReducerForReduxSingle,
    WeekDaysForReduxDBL:WeekDaysForReduxDBL,
    RoutinesForReduxDBL:RoutinesForReduxDBL
 })

export type rootReducerType=ReturnType<typeof rootRuducer>

export let store=createStore(rootRuducer)

//@ts-ignore
window.store=store
