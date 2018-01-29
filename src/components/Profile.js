import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountId: '',
      name: ''
    }
  }

  componentDidMount = (event) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser);
    this.setState({
      accountId: currentUser.accountId,
      name: currentUser.name
    });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
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
        {this.state.name}
      </div>
    );
  }
}

export default Profile;
