import React from "react";
import './App.css';
import Router from "./router/Router";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Error from "./views/Error";
import MainLayout from "./layouts/MainLayout";
import V1 from "./routes/V1";
import V2 from "./routes/V2";
import V3 from "./routes/V3";
import MainPage from "./views/MainPage";
import LoginPage from "./views/LoginPage";
import LogoutPage from "./views/LogoutPage";

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainPage}/>

            </Switch>
        </BrowserRouter>
    );
}
export default App;
