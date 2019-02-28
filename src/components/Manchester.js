import React from 'react';
import { NavLink } from 'react-router-dom';

class manchesterWeather extends React.Component {
	render() {
		return (
			<div >					
				<NavLink className="button" to="/warsaw">Próximo (Warsaw) </NavLink>
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Manchester,UK");
	}
};

export default manchesterWeather;