var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<h2>Nav Component</h2>	
// 				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
// 				<Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
// 				<Link to="/Extensions" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Extensions</Link>
// 			</div>
// 		);	
// 	}
// });

var Nav = (props) => {
	return (
		<div>
			<h2>Nav Component</h2>	
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
			<Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
			<Link to="/Extensions" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Extensions</Link>
		</div>
	);
}

module.exports = Nav;