import React from 'react';
import { NavLink } from 'react-router-dom';

class London extends React.Component {
	render() {
		return (
			this.props.getWeather("London,UK"),
			<div className="button">				
				<form>
					<NavLink to="/manchester">Próximo (Manchester) </NavLink>
				</form>		
			</div>	
		);
	}
};

export default London;