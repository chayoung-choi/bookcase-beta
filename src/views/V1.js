import React from "react";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

class V1 extends React.Component {
    render() {
        const id = uuidv4();
        console.log(id);
        return (
            <Link
                to={{
                    pathname: `/v2/${id}`,
                    state: {
                        name: "v1"
                    }
                }}
            >
                <>V1</>
            </Link>
        );
    }
}
export default V1;
