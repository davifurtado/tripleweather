import React from 'react';
import { NavLink } from 'react-router-dom';

class London extends React.Component {
	render() {

		return (
			<div className="button">				
				<form onClick={this.props.getWeatherManchester}>
					<NavLink to="/manchester">Próximo (Manchester) </NavLink>
				</form>		
			</div>	
		);
	}
};

export default London;