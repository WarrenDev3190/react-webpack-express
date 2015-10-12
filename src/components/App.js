import React, { Component } from 'react';
import Navigation from './nav/Navigation';
import { Link } from 'react-router';
import { Grid, Row, Col, PageHeader, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import connectToStores from 'alt/utils/connectToStores';
import OtherStore from '../stores/OtherStore'

@connectToStores
export default class App extends React.Component{
	static getStores(props){
		return [OtherStore];
	}
	static getPropsFromStores(props){
		return OtherStore.getState();
	}
	render(){
		return(
			<Grid>
				<Navigation/>
				<Row>
					<Col xs={12}>
						<PageHeader>{this.props.testData}</PageHeader>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<Link to="/other">Other</Link>
							</BreadcrumbItem>
						</Breadcrumb>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						{this.props.children}
					</Col>
					<Col xs={6}>
						<h2>
							Bootstrap Grids are cool huh!
						</h2>
					</Col>
				</Row>
			</Grid>
		)
	}
}