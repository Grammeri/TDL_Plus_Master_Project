import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import {Counter} from "../Pages/counter";
import {Tdl} from "../Pages/TDL";

type ContentPropsType = {

}

export const Content = (props:ContentPropsType) => {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={"/page1"} element={<Counter/>}/>
                    <Route path={"/page2"} element={<Tdl/>}/>
                </Routes>
            </div>
        </>

    );
};

