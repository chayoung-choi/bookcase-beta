import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import persistedReducer from "src/redux/reducers/persistedReducer";
import {persistStore} from "redux-persist";
import App from "./App";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "src/assets/styles/style.css";



ReactDOM.render(
    <App
        store={store}
        persistor={persistor}
    />,
    document.getElementById('root')
);
