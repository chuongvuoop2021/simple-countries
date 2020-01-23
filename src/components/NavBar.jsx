import React, { Component } from 'react';
import { Navbar,Button, Form ,FormControl} from 'react-bootstrap'

class NaviBar extends Component {
    constructor(props){
        super(props)
        this.state={
            searchkey:''
        }
    }
    async searchFor(e){
        let word=e.target.value
        if (word.length>2){
            await this.setState({searchkey:word})
            
        }
    }
    search(){
        this.props.setSearch(this.state.searchkey)
    }
    render() {
        return (
            <Navbar className='navbar navbar-dark bg-dark'>
                <Navbar.Brand href="#home">Countries API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <select style={{width: 150}} class="form-control" onChange>
                        <option value="EU">EU</option>
                        <option>EFTA</option>
                        <option>CARICOM</option>
                        <option>PA</option>
                        <option>AU</option>
                        <option>USAN</option>
                        <option>EEU</option>
                        <option>AL</option>
                        <option>ASEAN</option>
                        <option>CAIS</option>
                        <option>CEFTA</option>
                        <option>NAFTA</option>
                        <option>SAARC</option>
                    </select>

                    <Form inline>
                        <FormControl type="text" onChange={this.searchFor.bind(this)} placeholder="Enter Country Code" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={()=>{this.search()}}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NaviBar;