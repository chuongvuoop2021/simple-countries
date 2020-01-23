import React, { Component } from 'react';
import './App.css';
import NaviBar from './components/NavBar';
import Banner from './components/Banner'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {searchKey:''};
  }
  async setSearch(data){
    await this.setState({searchKey:data})
  }

  render() {
    return (
      <div>
         <NaviBar setSearch={this.setSearch.bind(this)}></NaviBar>
         <Banner></Banner>
{/*          <CountryList searchKey={this.state.searchKey}></CountryList>
 */}      </div>
    );
  }
}

export default App;
