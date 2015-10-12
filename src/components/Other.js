import React, { Component } from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import OtherAction from '../actions/OtherActions'; 


export default class Other extends React.Component{
	handleClick(){
		OtherAction.sayHello()
	}
	render(){
		return(
			<div>
			<PageHeader>Other Page</PageHeader>
			<Button onClick={this.handleClick}>Trigger Action</Button>
			</div>
		)
	}
}