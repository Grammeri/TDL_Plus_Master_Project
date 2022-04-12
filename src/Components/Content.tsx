import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import {Counter} from "../Pages/counter";
import {Tdl} from "../Pages/TDL";
import {DimaImage} from "./DimaImage";
import {Tdl2} from "./Tdl2";
import {UseEffectFunction} from "./UseEffectFunction";

type ContentPropsType = {

}

export const Content = (props:ContentPropsType) => {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={"/page1"} element={<Counter/>}/>
                    <Route path={"/page2"} element={<Tdl/>}/>
                    <Route path={"/page3"} element={<DimaImage/>}/>
                    <Route path={"/page4"} element={<Tdl2/>}/>
                    <Route path={"/page5"} element={<UseEffectFunction/>}/>
                </Routes>
            </div>
        </>

    );
};

