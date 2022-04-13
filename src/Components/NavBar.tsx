import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={"NavBar"}>
            NavBar
            <div><NavLink to ={"/page1"}>Counter</NavLink></div>
            <div><NavLink to ={"/page2"}>TDL</NavLink></div>
            <div><NavLink to ={"/page3"}>Picture</NavLink></div>
            <div><NavLink to ={"/page4"}>TDL2</NavLink></div>
            <div><NavLink to ={"/page5"}>UseEffect</NavLink></div>
            <div><NavLink to ={"/page6"}>Pagination</NavLink></div>


 </div>
    );
};

