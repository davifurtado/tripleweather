import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				<p className="city">Cidade: { this.props.city }, { this.props.country } </p>
				<p className="temp">Temperatura Atual: { this.props.temp } °C </p>
				<div className="tempMaxMin">
					<p>Max { this.props.temp_max } °C</p>
					<p>Min { this.props.temp_min } °C</p>
					<p>Umidade: { this.props.humidity }</p>   
				</div>     		
			</div>
		);
	}
};

export default Weather;