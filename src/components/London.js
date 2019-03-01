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

export default London;