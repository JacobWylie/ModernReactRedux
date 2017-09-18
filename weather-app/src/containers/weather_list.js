import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const country = cityData.city.country;
		const temps = cityData.list.map(weather => weather.main.temp);
		// const pressure = cityData.list.map(weather => weather.main.pressure);
		// const humidity = cityData.list.map(weather => weather.main.humidity);

		return(
			<tr key={name}>
				<td>{name}, {country}</td>
				<td>
					<Sparklines height={120} with={100} data={temps}>
						<SparklinesLine color='red' />
					</Sparklines>
				</td>
				<td>{}</td>
				<td>{}</td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {  // state.weather

	return { weather }; // key: vlaue pair are the same ie. weather: weather
}

export default connect(mapStateToProps)(WeatherList);