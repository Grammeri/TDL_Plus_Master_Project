import React, {Component} from 'react';
import Todo, {InArrayPropsType} from "./Todo";
import {Counter} from "./pages/Counter";
import {Route, Routes} from 'react-router-dom';
import {InputPage} from "./pages/InputPage";
import {Pagination} from "./pages/Pagination";
import {Napoleon} from "./pages/Napoleon";
import {Grids} from "./pages/Grids";
import {Position} from "./pages/Position";
import {Flex} from "./pages/Flex";
import {TDLforAssociativeArray} from "./pages/TodolistVersions/TDLAssociative";

import {Search} from "./Search";
import {Flights} from "./pages/Flights";
import {StyledComponents} from "./pages/StyledComponents";
import {Media} from "./pages/Media";
import {TDLforReducer} from "./pages/TodolistVersions/TDLforReducer";
import {TDLforReduxSINGL} from "./pages/TodolistVersions/TDLforReduxSINGL";
import {TDLforReduxDBL} from "./pages/TodolistVersions/TDLforReduxDBL";



type ContentPropsType = {
    skills1: Array<InArrayPropsType>
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
    // onBtnClickHandlerForFilter:(filterValue: string)=>void
    changeIsDone: (id: number, eventValue: boolean) => void
}

export const Content = (props: ContentPropsType) => {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={'/Todo'} element={<Todo
                        // onBtnClickHandlerForFilter={props.onBtnClickHandlerForFilter}
                        topic={'Routine'}
                        cargo2={100200}
                        cargoOfskills={props.skills1}
                        setCargoOfskills={props.setCargoOfskills}
                        changeIsDone={props.changeIsDone}
                    />}/>
                    <Route path={'/Counter'} element={<Counter/>}/>
                    <Route path={'/Flex'} element={<Flex/>}/>
                    <Route path={'/Position'} element={<Position/>}/>
                    <Route path={'/Flights'} element={<Flights/>}/>
                    <Route path={'/InputPage'} element={<InputPage/>}/>
                    <Route path={'/Napoleon'} element={<Napoleon/>}/>
                    <Route path={'/Grids'} element={<Grids/>}/>
                    <Route path={'/Pagination'} element={<Pagination/>}/>
                    <Route path={'/Search'} element={<Search/>}/>
                    <Route path={'/StyledComponents'} element={<StyledComponents/>}/>
                    <Route path={'/Media'} element={<Media/>}/>
                    <Route path={'/TDLforAssociativeArray'} element={<TDLforAssociativeArray/>}/>
                    <Route path={'/TDLforReducer'} element={<TDLforReducer/>}/>
                    <Route path={'/TDLforReduxSINGL'} element={<TDLforReduxSINGL/>}/>
                    <Route path={'/TDLforReduxDBL'} element={<TDLforReduxDBL/>}/>

                </Routes>

            </div>
        </>
    )

}

export default Content;