import React, {Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import V1 from "../views/V1";
import V2 from "../views/V2";
import V3 from "../views/V3";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import Apps from "./routes/Apps";
import {Routes} from "./routes";

const Error = lazy(() => import('../pages/Error'))

const Router = () => {

    const LayoutRoutes = Routes;

    return (
        <Suspense fallback={null}>
            <Switch>
                {LayoutRoutes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact === true}
                            component={route.component}
                        />
                    )
                })}
                <Route path="/login" component={LoginPage}/>
                <Route path="/logout" component={LogoutPage}/>
                <Route path="/*" component={Error}/>
            </Switch>
        </Suspense>
    );
}
export default Router;
