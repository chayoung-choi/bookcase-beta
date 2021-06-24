import React from "react";
import Sidebar from "./Sidebar";
import {Route} from "react-router-dom";
import Home from "../routes/Home";
import V1 from "../routes/V1";
import V2 from "../routes/V2";
import V3 from "../routes/V3";

const MainLayout = () => {
    return (
        <>
            <Sidebar/>
            <Route path={["/", "/bookcase"]} exact component={Home}/>
            <Route path="/v1" component={V1}/>
            <Route path={["/v2", "/v2/:id"]} component={V2}/>
            <Route path="/v3" component={V3}/>
        </>
    );
}
export default MainLayout;
