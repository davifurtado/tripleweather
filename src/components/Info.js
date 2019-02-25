import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				<p className="city">Cidade: { this.props.city }, { this.props.country } </p>
				<p className="temp">Temperatura Atual: { this.props.temp } </p>
				<div className="tempMaxMin">
					<p>Max { this.props.temp_max }</p>
					<p>Min { this.props.temp_min }</p>
					<p>Umidade: { this.props.humidity }</p>   
				</div>     		
			</div>
		);
	}
};

export default Weather;