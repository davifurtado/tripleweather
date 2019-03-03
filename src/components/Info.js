import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				<p className="city">{ this.props.city }, { this.props.country }</p>
				<p className="temp">{ this.props.temp } °C </p>
				<div className="tempMaxMin">
					<div>
						<p>Max</p>
						<p>{ this.props.temp_max } °C</p>
					</div>
					<div>
						<p>Min</p> 
						<p>{ this.props.temp_min } °C</p>
					</div>
					<div>
						<p>Umidade</p> 
						<p>{ this.props.humidity }</p>
					</div>
				</div>     		
			</div>
		);
	}
};

export default Weather;