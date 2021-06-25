import React from "react";

const LoginPage = ({location}) => {
    return (
        <>
            <h2>로그인 페이지</h2>
            <p>{location.pathname}</p>
        </>
    );
}
export default LoginPage;
