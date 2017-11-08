import React, { Component } from 'react';
import { urlApi } from '../constants';

import ErrorComponent from './../components/error';
import Search from './../components/search';
import List from './../components/list';

import { Preloader } from 'react-materialize';

class HomePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: null,
			errorStatus: null,
			errorText: null
		}
	}

	componentDidMount = () => {
		this.callApi(urlApi)
	}

	withSearch = (from, to) => {
		this.callApi(`${urlApi}?from=${from}&to=${to}`)
	}

	callApi = (url) =>{
		this.setState({list:null, errorStatus:null, errorText:null})

		fetch(url)
		.then( (res) =>{
			if(!res.ok){
				this.setState({list:null, errorStatus:res.status, errorText:res.statusText})
				return Promise.reject(new Error(res));
			}
			return res.json()
		})
		.then( (data) => this.setState({ list: data}) ) 
		.catch( (error) => console.log(error) )
	}

	render() {
		const list = this.state.list;
		const errorStatus = this.state.errorStatus;
		const errorText = this.state.errorText;
		return (
			<div>
			{errorStatus ? (<ErrorComponent errorStatus={errorStatus} errorText={errorText}/>) : (	
					<div className="inner cover">
						<Search searchable={this.withSearch} />
						{!list ? ( <Preloader flashing/> ) : ( <List items={list} /> )}
					</div>
				)}
			</div>
			);
	}
}

export default HomePage;
