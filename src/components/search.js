import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import moment from 'moment';

export default class Search extends React.Component{
	static propTypes = {
		searchable: PropTypes.func.isRequired
	}

	constructor(props){
		super(props);

		this.state = {
			from: '',
			to: '',
		}
		this.errorForm = false
	}

	onInputChange = (event, name) => {
		let {from, to} = this.state;
		name === "from" ? ( from = event.target.value) : ( to = event.target.value) ;

		this.validateDate(from, to)

		this.setState({from, to});
	}

	validateDate(from , to){
		(
			( from !== '' ? 
				( moment(to, "DD/MM/YY").isAfter(moment(from, "DD/MM/YY")) ) 
				: 
				( moment(to, "DD/MM/YY").isAfter(moment(new Date(), "DD/MM/YY"))) 
			) ? 
			(this.errorForm = false) 
			: 
			(this.errorForm = true)
		);

		if(to === '' || from === '' || moment(to, "DD/MM/YY").isAfter(moment(from, "DD/MM/YY")))
			this.props.searchable(from, to)
	}

	clearSearch = () => {
		this.setState({from:'',to:''})
		this.props.searchable('','')
	}

	render(){
		return (
			<div className="row"><br/>
				{this.errorForm ? (
					<div className="col-md-12">
						<div className="alert alert-danger" role="alert">
						  <strong>Oh shit!</strong> end date must be less than the enter date
						</div>
					</div>) : ""
				}
				<div className="col-md-2">
					<br/><h3 className="text-orange">Search</h3>
				</div>
				<div className="col-md-4">
					<div className="input-group">
						<Input 
							placeholder="From"
							inputChange={this.onInputChange}
							name="from" 
							validate={this.errorForm}
							value={this.state.from}
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="input-group">
						<Input 
							placeholder="To"
							inputChange={this.onInputChange} 
							name="to"
							validate={this.errorForm}
							value={this.state.to}
						/>
					</div>
				</div>
				<form className="col-md-2 form-inline pull-xs-right">
				    <button className="btn btn-warning" type="button" onClick={this.clearSearch}><i className="fa fa-times"></i></button>
			  	</form>
			</div>
			);
	}

}


