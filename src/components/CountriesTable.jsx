import { Table, Image, Col } from 'react-bootstrap'
import React, { Component } from 'react';

function CountriesTable(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>COUNTRY</th>
          <th>CAPITAL</th>
          <th>REGION</th>
          <th>POPULATION</th>
        </tr>
      </thead>
      <tbody>
        {
          props.countries.map(country => (
            <tr>
              <td>
                <Col xs={1} sm={1}>
                  <Image style={{ width: 50 }} src={ country.flag } />
                </Col>
              </td>              
              <td>{ country.name }</td>
              <td>{ country.capital }</td>
              <td>{ country.region }</td>
              <td>{ country.population }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default CountriesTable