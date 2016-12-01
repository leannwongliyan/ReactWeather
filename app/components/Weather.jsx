var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;
		
		debugger;
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			that.setState({isLoading: false});
			alert(errorMessage);
		});
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		//nested function 
		function renderMessage() {
			debugger;
			if (isLoading) {
				return <h3>Fetching Weather...</h3>;
			} else if (temp && location) {
				return <GreeterMessage temp={temp} location={location}/>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<GreeterForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
