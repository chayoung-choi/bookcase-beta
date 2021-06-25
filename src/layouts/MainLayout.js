import React from "react";
import Sidebar from "./Sidebar";
import {Route} from "react-router-dom";
import Home from "../views/Home";
import V1 from "../views/V1";
import V2 from "../views/V2";
import V3 from "../views/V3";
import Router from "../router/Router";

const MainLayout = () => {
    return (
        <>
            <Sidebar/>
            <Router/>
        </>
    );
}
export default MainLayout;
