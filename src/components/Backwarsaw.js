import React from 'react';
import { NavLink } from 'react-router-dom';

class Backwarsaw extends React.Component {
	render() {
		return (
			<div>						
				<NavLink className="button" to="/manchester">Retornar (Manchester) </NavLink>						
			</div>
		);
	}
};

export default Backwarsaw;