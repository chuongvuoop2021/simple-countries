import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
// import { Table, Image, Col } from 'react-bootstrap'

import CountriesTable from './CountriesTable'

// functional component
function CountryList({ searchKey }) {
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    console.log('Loading')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        //console.log(response.data);
        setAllCountries(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

  const altNames = allCountries.filter(country => {
      return country.altSpellings.some(
        names => names.toLowerCase().indexOf(searchKey) >= 0
      )
    })

  return (
    <div>
    <CountriesTable countries={ altNames } />
    </div>
  )
}

export default CountryList


//Class Component

/* class CountryList extends React.Component {
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
  
  baseUrl = "https://restcountries.eu/rest/v2"
  cacheName = "world-api-data"
  async writeCache() {
    try {
      const openCache = await caches.open(this.cacheName)
      await openCache.add(`${this.baseUrl}/all`)
      // console.log("data fetched and stored in cache!")
    } catch (e) {
      console.log("error writing to cache", e.message)
      throw new Error()
    }
  }
  //go to the cache and get the data
  async readCache() {
    try {
      const worldData = await caches.open(this.cacheName)
      const cachedResponse = await worldData.match(`${this.baseUrl}/all`)
      return await cachedResponse.json()
    } catch (e) {
      console.log("cache is empty")
      return "empty"
    }
  }
  //check if the cache is empty, write/read cache if empty, otherwise just read
  async getData() {
    if ((await this.readCache()) === "empty") {
      try {
        await this.writeCache()
      } catch (e) {
        console.log("something broke in checkCache")
        throw new Error()
      }
    }
    try {
      return await this.readCache()
    } catch (error) {
      console.log("something broke in the later part of checkCache")
      throw new Error()
    }
  }

  async getAll() {
    try {
      const data = await this.getData()
      const result = data.map(country => country.name)
      console.log("get all result", result)
      return result
    } catch (error) {
      throw new Error()
    }
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
  } */

  /* render() { */
    /* console.log(this.state.searchKey)
    const filteredCountries = this.state.allCountries.filter(country => country.name.toLowerCase().indexOf(this.state.searchKey) >= 0)
    console.log(filteredCountries) */
    /* const languages = this.state.allCountries.filter(country => {
      return country.languages.some(
        lang => lang.iso639_1 === this.state.searchKey.toLowerCase()
      )
    }) */
    /* const altnames = this.state.allCountries.filter(country => {
      return country.altSpellings.some(
        names => names.toLowerCase().indexOf(this.state.searchKey) >= 0
      )
    })
    
   // console.log(this.props.searchKey)
    return (
      
      <div>
        <CountryList2 countries={ altnames } />
      </div>
    )
  }
}

export default CountryList */