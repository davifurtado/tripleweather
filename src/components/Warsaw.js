import React from 'react';
import { NavLink } from 'react-router-dom';

class warsawWeather extends React.Component {
	render() {
		return (			
			<div >					
				<NavLink className="button" to="/">Próximo (London) </NavLink>
			</div>
		);
	}
	componentDidMount(city) {
		this.props.getWeather("Warsaw,PL");
		document.getElementsByClassName('main-grid')[0].style.backgroundImage = "url(./warsaw_background.jpg)";
	
	}
};

export default warsawWeather;