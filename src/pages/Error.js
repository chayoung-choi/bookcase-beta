import React from "react";

const Error = ({location}) => {
    return (
        <>
            <h2>잘못된 요청입니다.</h2>
            <p>{location.pathname}</p>
        </>
    );
}
export default Error;
