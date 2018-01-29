import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import Home from './Home';
import Profile from './Profile';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/summoner/:name" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
