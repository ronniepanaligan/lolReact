import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, PageHeader, FormGroup, FormControl, Button } from 'react-bootstrap';

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

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <PageHeader>lolReact is an application for LoL that displays summoners match history and current game info</PageHeader>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
                <Button bsStyle="primary">Submit</Button>
              </FormGroup>
            </Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
