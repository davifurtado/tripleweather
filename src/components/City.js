import React from 'react';
import { NavLink } from 'react-router-dom';

class London extends React.Component {
	render() {
		return (
			<div>							
				<NavLink className="button" to="/manchester">Próximo (Manchester) </NavLink>						
			</div>	
		);
	}
	componentDidMount(city) {
		this.props.getWeather("London,UK");	
		document.getElementsByClassName('main-grid')[0].style.backgroundImage = "url(./london_background.jpg)";		
	}						
};

class Manchester extends React.Component {
	render() {
		return (
			<div >					
				<NavLink className="button" to="/warsaw">Próximo (Warsaw) </NavLink>
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Manchester,UK");
		document.getElementsByClassName('main-grid')[0].style.backgroundImage = "url(./manchester_background.jpg)";
	}
};

class Warsaw extends React.Component {
	render() {
		return (			
			<div >					
				<NavLink className="button" to="/">Próximo (London) </NavLink>
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Warsaw,PL");
		document.getElementsByClassName('main-grid')[0].style.backgroundImage = "url(./warsaw_background.jpg)";	
	}
};

export { London, Manchester, Warsaw };