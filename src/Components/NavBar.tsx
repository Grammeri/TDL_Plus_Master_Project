import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={"NavBar"}>
            NavBar
            <div><NavLink to ={"/page1"}>Counter</NavLink></div>
            <div><NavLink to ={"/page2"}>TDL</NavLink></div>
            <div><NavLink to ={"/page3"}>Page3</NavLink></div>
            <div><NavLink to ={"/page4"}>Page4</NavLink></div>


 </div>
    );
};

