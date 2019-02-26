import React from 'react';
import { NavLink } from 'react-router-dom';

class Backwarsaw extends React.Component {
	render() {
		return (
			<div className="button">
				<button>				
					<form>
						<NavLink to="/manchester">Retornar (Manchester) </NavLink>
					</form>		
				</button>			
			</div>
		);
	}
};

export default Backwarsaw;