import React from "react";
import MainLayout from "../layouts/MainLayout";

const MainPage = ({location}) => {
    return (
        <>
            <h2>MainPage</h2>
            <p>{location.pathname}</p>
            <MainLayout/>
        </>
    );
}
export default MainPage;
