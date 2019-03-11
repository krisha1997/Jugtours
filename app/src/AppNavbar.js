import React, { Component } from 'react';
import { Collapse, Nav, Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {dropdownOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}));
  }

 render() {
    return <Navbar color="warning" light>
      <NavbarBrand tag={Link} to="/"><img src={logo} className="App-logo"/></NavbarBrand>
      <NavbarBrand tag={Link} to="/" className="mr-auto">Home</NavbarBrand>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>Useful Links</DropdownToggle>
      <DropdownMenu>
            <DropdownItem>
            <NavLink href="https://twitter.com/oktadev">@oktadev</NavLink>
            </DropdownItem>
            <DropdownItem>
            <NavLink href="https://github.com/oktadeveloper/okta-spring-boot-react-crud-example">GitHub</NavLink>
            </DropdownItem>
      </DropdownMenu>
      </Dropdown>
    </Navbar>;
  }
}