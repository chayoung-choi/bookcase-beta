import React from "react";

const LogoutPage = ({location}) => {
    return (
        <>
            <h2>로그아웃 페이지</h2>
            <p>{location.pathname}</p>
        </>
    );
}
export default LogoutPage;
