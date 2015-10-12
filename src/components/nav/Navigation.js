require('./Navigation.scss');

import React from 'react';
import { Navbar, Nav, NavBrand, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends React.Component{
	render(){
		return(
			<Navbar inverse fixedTop>
			    <NavBrand><a href="#">Brand</a></NavBrand>
			    <Nav right>
			      <NavDropdown eventKey={1} title="Dropdown" id="nav-brand-dropdown">
			        <MenuItem eventKey="1">Help</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey="2">Comment</MenuItem>
			      </NavDropdown>
			    </Nav>
			  </Navbar>
		);	
	}
}