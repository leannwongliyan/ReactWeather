var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');
var ErrorModal = require('ErrorModal');
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
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
			alert(errorMessage);
		});
	},
	render: function () {
		var {isLoading, temp, location, errorMessage} = this.state;

		//nested function 
		function renderMessage() {
			debugger;
			if (isLoading) {
				return <h3 className="text-center">Fetching Weather...</h3>;
			} else if (temp && location) {
				return <GreeterMessage temp={temp} location={location}/>;
			}
		}
		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>				)
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<GreeterForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
