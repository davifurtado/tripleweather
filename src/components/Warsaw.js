import React from 'react';
import { NavLink } from 'react-router-dom';

class warsawWeather extends React.Component {
	render() {
		return (
			<div className="button">				
				<form onClick={this.props.getWeatherLondon}>
					<NavLink to="/">Próximo (London) </NavLink>
				</form>					
			</div>
		);
	}
};

export default warsawWeather;