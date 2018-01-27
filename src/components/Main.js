import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
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
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </div>

    );
  }
}

export default Main;
