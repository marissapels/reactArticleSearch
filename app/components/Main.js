var React = require("react");
var Link = require("react-router").Link;
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
var helpers = require("./utils/helpers");
var Main = React.createClass({
	getInitialState: function(){
		return{ topic: "", results: "", saved:[]};
	},
	render: function() {
		return(
			<div className="container">
				<div className="jumbotron">
      				<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>
				<div className="row">
					<Search />
				</div>
				<div className="row">
					<Results />
				</div>
				<div className="row">
					<Saved />
				</div>
			</div>
		);
	}
});
module.exports = Main;

