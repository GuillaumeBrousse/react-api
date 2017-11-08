import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {CollectionItem, Badge} from 'react-materialize'

export default class Item extends Component {
	static propTypes = {
		value: PropTypes.object.isRequired
	}

	render() {
		const item = this.props.value;
		const state = {
			value : item.totale ? ("Fermé") : ("Ouvert"),
			btn : item.totale ? ("btn btn-danger") : ("btn btn-success")
		}
		return (
			<CollectionItem href={`/${item.id}`}> {item.reason} prévu le {item.date} à {item.start} <Badge className={ state.btn }>{ state.value }</Badge></CollectionItem>
		);
	}
}
