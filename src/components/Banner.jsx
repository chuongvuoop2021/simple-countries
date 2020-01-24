import React, {Component} from 'react';
import {Jumbotron ,Container} from 'react-bootstrap'

function Banner() {
  return (
      <Jumbotron fluid>
          <Container>
              <h1>Simple ReactJS Countries API App</h1>
          </Container>
      </Jumbotron>
  )
}

export default Banner