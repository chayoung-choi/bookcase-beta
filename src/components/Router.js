import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../routes/Home";
import V1 from "../routes/V1";
import V2 from "../routes/V2";
import V2Detail from "../routes/V2Detail";
import V3 from "../routes/V3";

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
