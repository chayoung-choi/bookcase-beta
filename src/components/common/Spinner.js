import { css } from "@emotion/react";
import {HashLoader} from "react-spinners";
import {useState} from "react";
const override = css`
  display: block;
  margin: 0 auto;
`;
const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [size, setSize]  = useState(50);
    return (
        <HashLoader color={"#2196f3"} loading={loading} css={override} size={size} />
    );
}
export default Spinner;


