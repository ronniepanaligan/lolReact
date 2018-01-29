import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summoner: 'aa'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
       summoner: e.target.value
     });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/summoner/' + this.state.summoner)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      this.props.history.push("/summoner/" + this.state.summoner);
    });
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">lolReact</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <PageHeader>Search for a Summoner</PageHeader>
        <Navbar.Form>
          <FormGroup>
            <FormControl type="text" onChange={this.handleChange} value={this.state.summoner}/>
          </FormGroup>
          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        </Navbar.Form>
      </div>
    );
  }
}

export default App;
