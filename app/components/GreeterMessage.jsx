var React = require('react');


// var GreeterMessage = React.createClass({
// 	render: function () {
// 		var {temp, location} = this.props;

// 		return (
// 			<h3>Its {temp} in {location}.</h3>
// 		);
// 	}
// });

//Stateless
// var GreeterMessage = (props) => {
// 	var {temp, location} = props;
// 		return (
// 			<h3>Its {temp} in {location}.</h3>
// 		);
// }

var GreeterMessage = ({temp, location}) => {
	return (
		<h3 classname="text-center">Its {temp} in {location}.</h3>
	)
};

module.exports = GreeterMessage;