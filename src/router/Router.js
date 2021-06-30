import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Routes} from "./routes";

const Error = lazy(() => import('src/pages/Error'));
const Auth = lazy(() => import('src/pages/Auth'));
const LoginPage = lazy(() => import('src/pages/LoginPage'));
const LogoutPage = lazy(() => import('src/pages/LogoutPage'));

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
                <Route path="/auth" component={Auth}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/logout" component={LogoutPage}/>
                <Route path="/*" component={Error}/>
            </Switch>
        </Suspense>
    );
}
export default Router;
