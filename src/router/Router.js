import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
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
