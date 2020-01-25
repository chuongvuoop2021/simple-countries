import React, { Component } from 'react'
import axios from 'axios'
import { Table, Image, Col } from 'react-bootstrap'


class CountryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countrydetails: {},
      country: {},     
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data);
        this.setState({ countrydetails: response.data })
      })
      .catch(error => {
        console.log(error)
      });
  }
  render() {
    let datas = this.state.countrydetails
    const { searchKey } =this.props
   // console.log(this.props.searchKey)
    return (
      <div>
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
          { searchKey? Object.keys(datas).filter((key)=> 
            { return searchKey.toUpperCase().indexOf(datas[key].alpha3Code.toUpperCase())!== -1 }).map(key =>
            <tr key={key}>
              <td>
                <Col xs={1} sm={1}>
                  <Image style= {{ width: 50 }} src={datas[key].flag}/>
                </Col>
              </td>   
              <td> { datas[key].name } </td>
              <td> { datas[key].capital } </td>
              <td> { datas[key].region } </td>
              <td> { datas[key].population } </td>  
              <td> { datas[key].population } </td>
            </tr>) : Object.keys(datas).map(key =>
            <tr key = {key}>
              <td>
                <Col xs = {1} sm = {1}>
                  <Image style= {{ width: 50 }} src = { datas[key].flag } />
                </Col>
              </td>              
              <td> { datas[key].name } </td>
              <td> { datas[key].capital } </td>
              <td> { datas[key].region } </td>
              <td> { datas[key].population } </td>  
            </tr>)
          }
        </tbody>
      </Table>
      </div>
    )
  }
}

export default CountryList