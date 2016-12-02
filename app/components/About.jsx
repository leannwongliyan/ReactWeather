var React = require('react');


// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Component</h3>	
// 		);	
// 	}
// });

//Stateless

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>	
			<p>This is a weather application built on React. I have built this for The Complete React Web App Developer Online Course.</p>
			<p>Here are some of the tools I used: </p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for location weather.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;