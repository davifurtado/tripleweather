import React from 'react';
import { NavLink } from 'react-router-dom';

class Backmanchester extends React.Component {
	render() {
		return (
			<div className="button">				
				<form>
					<NavLink to="/">Retornar (London) </NavLink>
				</form>					
			</div>
		);
	}
};

export default Backmanchester;