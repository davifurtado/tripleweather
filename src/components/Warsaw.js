import React from 'react';
import { NavLink } from 'react-router-dom';

class warsawWeather extends React.Component {
	render() {
		return (			
			<div className="button">						
					<form>
						<NavLink to="/">Próximo (London) </NavLink>
					</form>									
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Warsaw,PL");
	}
};

export default warsawWeather;