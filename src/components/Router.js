import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import V1 from "../routes/V1";
import V2 from "../routes/V2";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/v1" component={V1} />
                <Route path="/v2/:id" component={V2} />
            </Switch>
        </Router>
    );
};
export default AppRouter;
