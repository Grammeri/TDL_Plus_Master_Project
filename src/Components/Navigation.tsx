import React from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Navigation.module.css"
import Button from "@mui/material/Button";


export const Navigation = () => {
    return (
        <div className={style.nav}>
            {/*<div><button><NavLink to={"/page1"}>Todo </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/page2"}>Counter</NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Flights"}>Bankomat </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/InputPage"}>Input </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Napoleon"}>Napoleon </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Grids"}>Grids </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Pagination"}>Pagination </NavLink></button></div>*/}

            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'30px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Todo"}>Todo </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Counter"}>Counter </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Flex"}>Flex </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Position"}>Positions </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Flights"}>Flights </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/InputPage"}>Input </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Napoleon"}>Napoleon </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Grids"}>Grids </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Pagination"}>Pagination </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Search"}>Search </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/StyledComponents"}>StyledComponents </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Media"}>Media </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/TDLforAssociativeArray"}> TDL: Associative Array </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/TDLforReducer"}> TDL: Reducer </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/TDLforReduxSINGL"}> TDL: Redux Single </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/TDLforReduxDBL"}> TDL: Redux Double </NavLink> </Button></div>



        </div>
    );
};

