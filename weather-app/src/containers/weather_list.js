import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const country = cityData.city.country;
		const temps = cityData.list.map(weather => weather.main.temp);
		const wind = cityData.list.map(weather => weather.wind.speed);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const link = `https://openweathermap.org/city/${cityData.city.id}`;

		return(
			<tr key={name}>
				<td>
					<a href={link} target='_blank'> 
						{'  '}{name}, {country}
					</a>
				</td>
				<td>
					<Sparklines height={100} width={180} data={temps}>
						<SparklinesLine color='red' style={{ fill: "grey" }}/>
						<SparklinesReferenceLine type="avg" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={wind}>
						<SparklinesLine color='blue' style={{ fill: "grey" }}/>
						<SparklinesReferenceLine type="avg" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={humidity}>
						<SparklinesLine color='green' style={{ fill: "grey" }}/>
						<SparklinesReferenceLine type="avg" />
					</Sparklines>
				</td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (℃)</th>
						<th>Wind (km/h)</th>
						<th>Humidity (%)</th>
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