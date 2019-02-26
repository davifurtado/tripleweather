import React from 'react';
import { NavLink } from 'react-router-dom';

class warsawWeather extends React.Component {
	render() {
		return (
			this.props.getWeather("Warsaw,PL"),
			<div className="button">				
				<form>
					<NavLink to="/">Próximo (London) </NavLink>
				</form>					
			</div>
		);
	}
};

export default warsawWeather;