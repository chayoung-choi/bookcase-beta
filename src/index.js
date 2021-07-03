import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Theme from "./config/Theme";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "src/assets/styles/style.css";

const theme = Theme;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Suspense>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                        <MainLayout/>
                    </BrowserRouter>
                </ThemeProvider>
            </Suspense>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
