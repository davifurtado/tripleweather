import React from 'react';
import { NavLink } from 'react-router-dom';

class Backmanchester extends React.Component {
	render() {
		return (
			<div className="button">
				<button>				
					<form>
						<NavLink to="/">Retornar (London) </NavLink>
					</form>	
				</button>				
			</div>
		);
	}
};

export default Backmanchester;