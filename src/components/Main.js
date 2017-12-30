import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              lolReact
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>lolReact</Header>
          <p>This is a basic FullStack React and Node app that utilizes Riots LoL API.</p>
        </Container>
      </div>
    );
  }
}

export default Main;
