import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		link: PropTypes.string.isRequired
	}

	render() {
		const item = this.props;
		return (
        	<div className="row">
    			<div className="col-md-4">
	        		{ (item.id - 1) > 0 ? (<Link to={`/${item.id - 1}`}><Icon>keyboard_arrow_left</Icon>Previous event</Link>) : ""}
				</div>
        		<div className="col-md-4">
					<a className="lead btn btn-xs btn-info" href={item.link} target="_blank" role="button">Show more</a>
        		</div>
        		<div className="col-md-4">
        			<Link to={`/${item.id + 1}`}>Next event<Icon>keyboard_arrow_right</Icon></Link>				        			
        		</div>
        	</div>
		);
	}
}
