import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Btnhome from './../components/btnhome';

export default class errorPage extends Component {
	static propTypes = {
		errorStatus: PropTypes.number.isRequired,
		errorText: PropTypes.string.isRequired
	}

  	render() {
		const errorStatus = this.props.errorStatus;
		const errorText = this.props.errorText;
	    return (
			<div className="inner cover error404">
				<h1>{errorStatus}</h1>
				<p className="lead">{errorText}</p>
				<Btnhome />
			</div>
	    );
  	}
}