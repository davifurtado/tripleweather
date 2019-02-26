import React from 'react';
import { NavLink } from 'react-router-dom';

class manchesterWeather extends React.Component {
	render() {
		return (
			this.props.getWeather("Manchester,UK"),
			<div className="button">				
				<form >
					<NavLink to="/warsaw">Próximo (Warsaw) </NavLink>
				</form>	
			</div>
		);
	}
};

export default manchesterWeather;