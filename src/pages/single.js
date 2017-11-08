import React, { Component } from 'react';
import { urlApi } from '../constants';

import Navigation from './../components/navigation';
import Error from './../components/error';
import Btnhome from './../components/btnhome';

import { Preloader } from 'react-materialize';

export default class SinglePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			item: null,
			errorStatus: null,
			errorText: null
		}
	}

	componentWillMount = () => {
		this.loadItem();
	}

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.item !== null && this.props.match.params.id !== this.state.item.id)
			this.loadItem();
	}

	loadItem(){
		fetch(`${urlApi}/${this.props.match.params.id}`)
		.then( (res) =>{
			if(!res.ok){
				this.setState({errorStatus:res.status, errorText:res.statusText})
		        return Promise.reject(new Error(res));
			}
		    return res.json()
		})
		.then( (res) => this.setState({ item: res.item}) ) 
		.catch( (error) => console.log(error) )
	}

	render() {
		const item = this.state.item;
		const errorStatus = this.state.errorStatus;
		const errorText = this.state.errorText;
		return (
    		<div>
				{errorStatus ? (<Error errorStatus={errorStatus} errorText={errorText}/>) : (		
					<div>{!item ? ( <Preloader flashing/>	) :	
						(
							<div className="inner cover">
						      	<div className="card">
									<img src="http://sedeplacer.bordeaux-metropole.fr/bundles/bdxmetrocore/images/circulation/pontchaban.jpg?20170925143118" alt="pont chaban" />
								 	<div className="card-block">
								    	{item.totale ? (<h1 className="card-title text-orange">Fermeture totale du pont <br/>prévu le {item.date}</h1>) : (<h1 className="card-title text-green">Fermeture partiel du pont <br/>prévu le {item.date}</h1>) }
							        	<p className="lead card-text">De {item.start} jusqu'à {item.end}
							        		<br/>En raison de : {item.reason}
							        	</p><br/>
				        				<Navigation id={item.id} link={item.link}/>
				        				<Btnhome/>
								  	</div>
								</div>
				        	</div>
						)
					}</div>)
				}
		    </div>
		);
	}
}