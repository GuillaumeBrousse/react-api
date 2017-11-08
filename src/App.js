import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import SinglePage from './pages/single';
import { projectName } from './constants';

class App extends Component {

	render() {
		return (
			<Router>
	      		<div className="site-wrapper-inner">
	      			<div className="cover-container">
		      			<div className="masthead clearfix">
							<div className="inner">
								<h1 className="text-orange">{ projectName }</h1>
							</div>
						</div>
						<Route exact path="/" component={HomePage} />
						<Route path="/:id" component={SinglePage} />
				      	<div className="mastfoot">
				            <div className="inner">
				            	<p><a href="https://reactjs.org/" className="text-orange">React project</a>, by <a href="http://google.com" className="text-orange">Guillaume Brousse</a></p>
				            </div>
			          	</div>
			        </div>
				</div>
			</Router>
		);
	}

}

export default App;