import React from "react";
import SideBar from "./components/SideBar";
import ContentWrapper from "./components/ContentWrapper";
import {BrowserRouter} from 'react-router-dom'

import "./assets/css/app.css";

function App() {
    return (
        <BrowserRouter>
            <div id="wrapper">
                <SideBar />
                <ContentWrapper />
            </div>
        </BrowserRouter>
    );
}

export default App;
