import React from 'react';
import '../App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";
import {Content} from "./Content";


function App() {
    return (
        <div className="App">

            <div className={"container"}>
                <div className={"header"}>
                    <Header/>
                </div>
                <div className={"nav"}>
                    <NavBar/>
                </div>

                <div className={"content"}>
                    <Content/>
                </div>
                <div className={"footer"}>
                    <Footer/>
                </div>
            </div>

        </div>
    );
}

export default App;
