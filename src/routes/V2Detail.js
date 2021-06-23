import React from "react";

export default ({match, location}) => {
console.log(match);
console.log(location);
    return(
        <>
            <>V2 Detail</>
            <>{match.params.id}</>
        </>
    );
}
