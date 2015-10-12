import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Other from './components/Other';


const routes =  (
	<Router>
		<Route name="home" path="/" component={App}>
			<Route name="other" path="/other" component={Other}/>
		</Route>
	</Router>
);

ReactDom.render(
  routes,
  document.getElementById("react-container")
);