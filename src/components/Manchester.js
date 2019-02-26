import React from 'react';
import { NavLink } from 'react-router-dom';

class manchesterWeather extends React.Component {
	render() {
		return (
			<div className="button">								
				<form >
					<NavLink to="/warsaw">Próximo (Warsaw) </NavLink>
				</form>					
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Manchester,UK");
	}
};

export default manchesterWeather;