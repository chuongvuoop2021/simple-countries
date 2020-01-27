import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Image, Col } from 'react-bootstrap'

import CountryList2 from './CountryList2'

function CountryList({ searchKey }) {
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    console.log('Loading')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data);
        setAllCountries(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })
  
  const filteredCountries = allCountries.filter(country => country.alpha3Code.toLowerCase().indexOf(searchKey) >= 0)

  return (
    <div>
    <CountryList2 countries={ filteredCountries } />
    </div>
  )
}

export default CountryList


//Class Component
/*
class CountryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCountries: [],
      country: {},
      searchKey: props.searchKey,
    }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        searchKey: nextProps.searchKey,
      })
    
  }

  componentDidMount() {
    console.log('Loading')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data);
        this.setState({ allCountries: response.data, filteredCountries: response.data})
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    console.log(this.state.searchKey)
    const filteredCountries = this.state.allCountries.filter(country => country.alpha3Code.toLowerCase().indexOf(this.state.searchKey) >= 0)
    
   // console.log(this.props.searchKey)
    return (
      
      <div>
        <CountryList2 countries={ filteredCountries } />
      </div>
    )
  }
}

export default CountryList */