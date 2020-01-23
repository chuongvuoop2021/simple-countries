import React, { Component } from 'react';
import { Jumbotron ,Container } from 'react-bootstrap'

class Banner extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Find a Country</h1>
                </Container>
            </Jumbotron>
        );
    }
}

export default Banner;