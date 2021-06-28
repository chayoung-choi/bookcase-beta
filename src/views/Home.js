import React, {lazy, Suspense} from "react";
import BookSlider from "../components/BookSlider";
import {Box, Card, CardContent, Container, Paper} from "@material-ui/core";
import Spinner from "../components/common/Spinner";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Box mb={4}>
                    <BookSlider/>
                </Box>
                <Box mb={4}>
                    <Card>
                        <CardContent>
                            <Spinner/>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        );
    }
}

export default Home;
