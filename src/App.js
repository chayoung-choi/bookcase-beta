import React, {Suspense} from "react";

import './App.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from "./config/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";


const theme = Theme;

const App = (props) => {
    return (
        <>
            <Provider store={props.store}>
                <PersistGate persistor={props.persistor}>
                    <Suspense>
                        <ThemeProvider theme={theme}>
                            <CssBaseline/>
                            <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                                <MainLayout/>
                            </BrowserRouter>
                        </ThemeProvider>
                    </Suspense>
                </PersistGate>
            </Provider>
        </>
    );
}
export default App;
