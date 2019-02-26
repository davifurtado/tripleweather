import React from 'react';
import { NavLink } from 'react-router-dom';

class London extends React.Component {
	render() {
		return (
			<div className="button">								
					<form>
						<NavLink to="/manchester">Próximo (Manchester) </NavLink>
					</form>					
			</div>	
		);
	}
	componentDidMount(city) {
		this.props.getWeather("London,UK");
	}						
};

export default London;