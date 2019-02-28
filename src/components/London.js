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
	}						
};

export default London;