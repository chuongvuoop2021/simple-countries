import React, {Component, useState} from 'react'

import './App.css'

import CountryList from './components/CountryList'
import NaviBar from './components/NavBar'
import Banner from './components/Banner'

const App = () => {
  const [setSearch] = React.useState('')

  async function setSearch(data){
    this.setState({searchKey:data})
  }

    return (
      <div>
         <NaviBar setSearch={setSearch.bind(this)}></NaviBar>
         <Banner></Banner>
         <CountryList searchKey={searchKey}></CountryList>
      </div>
    )
  }

export default App
