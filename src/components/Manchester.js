import React from 'react';
import { NavLink } from 'react-router-dom';

class manchesterWeather extends React.Component {
	render() {
		return (
			<div className="button">				
				<form onClick={this.props.getWeatherWarsaw}>
					<NavLink to="/warsaw">Próximo (Warsaw) </NavLink>
				</form>	
			</div>
		);
	}
};

export default manchesterWeather;