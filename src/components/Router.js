import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import V1 from "../views/V1";
import V2 from "../views/V2";
import V2Detail from "../views/V2Detail";
import V3 from "../views/V3";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/v1" component={V1}/>
            <Route path="/v2" exact={true} component={V2}/>
            <Route path="/v2/:id" component={V2Detail}/>
            <Route path="/v3" component={V3}/>
        </Switch>
    );
};
export default AppRouter;
