import React from "react";
import BookSlider from "../components/BookSlider";
import {Container} from "@material-ui/core";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <BookSlider/>
            </Container>
        );
    }
}

export default Home;
