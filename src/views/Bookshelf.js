import React from "react";

const Bookshelf = ({match, location}) => {
    console.log(match);
    console.log(location);

    return(
        <>
            <>책장</>
            <>{match.params?.id && match.params.id}</>
        </>
    );
}
export default Bookshelf;
