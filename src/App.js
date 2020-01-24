import React, {useState} from 'react'

import './App.css'

import CountryList from './components/CountryList'
import NaviBar from './components/NavBar'
import Banner from './components/Banner'

function App(props) {
  const [searchKey, setsearchKey] = useState('')

  async function setSearch(data){
    [searchKey, setsearchKey] = React.useState(data)
  }

    return (
      <div>
         <NaviBar setSearch={this.setSearch.bind(this)}></NaviBar>
         <Banner></Banner>
         <CountryList searchKey={searchKey}></CountryList>
      </div>
    )
  }

export default App
