import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import {Collection} from 'react-materialize';

export default class List extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	render() {
		return (
			<div>
				<Collection>
					{this.props.items.map((item, i) => {
						return (
        					<Item value={item} key={i}/>
        					)
						})
					}
				</Collection>
				<div className="col-md-12" align="right">
					<p className="lead text-orange">Showing all of {this.props.items.length} entries</p>
				</div>
			</div>
			);
	}
}