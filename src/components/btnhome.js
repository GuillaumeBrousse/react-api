import React, { Component } from 'react';

export default class btnhome extends Component {

  	render() {
	    return (
			<div className="col-md-12 text-center">
				<a href={`/`} className="btn btn-secondary" >Back to homepage</a>
			</div>
	    );
  	}
}