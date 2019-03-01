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
		document.getElementsByClassName('main-grid')[0].style.backgroundImage = "url(./manchester_background.jpg)";
	}
};

export default manchesterWeather;