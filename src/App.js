import React, { Component, useState } from 'react'

import './App.css'
import CountryList from './components/FetchCountries'
import NaviBar from './components/NavBar'
import Banner from './components/Banner'

// functional component
function App() {
  const [searchKey, setSearchKey] = useState('')

  return (
    <div>
      <NaviBar setSearch={setSearchKey}></NaviBar>
      <Banner></Banner>
      <CountryList searchKey={searchKey}></CountryList>
    </div>
  )
}

export default App



//Class Component
/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchKey:'' }
  }
  setSearch(data){
    this.setState({ searchKey:data })
  }

  render() {
    return (
      <div>
         <NaviBar setSearch={ this.setSearch.bind(this) }></NaviBar>
         <Banner></Banner>
         <CountryList searchKey = { this.state.searchKey } ></CountryList>
      </div>
    )
  }
}

export default App */