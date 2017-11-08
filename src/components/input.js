import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';

export default class SearchInput extends React.Component{
	static propTypes = {
		placeholder: PropTypes.string,
		inputChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		validate: PropTypes.bool.isRequired,
		value: PropTypes.string.isRequired,
	}

	handleChange = (event) => {
		this.props.inputChange(event, this.props.name)
	}


	render(){
		return (
			<div>
				<Input 
					type="date" 
					options = {{
						format:'dd/mm/yyyy'
					}}
					maxLength="11"
					placeholder={this.props.placeholder}
					onChange={this.handleChange} 
					name={this.props.name}
					validate={this.props.validate}
					value={this.props.value}
				/>
			</div>
		);
	}

}