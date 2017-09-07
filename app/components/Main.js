var React = require("react");
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
var helpers = require("./utils/helpers");
var Main = React.createClass({
	getInitialState: function(){
		return{ searchTopic: "", searchBegin:"", searchEnd:""};
	},
	componentDidUpdate: function() {
	    // Run the query for the address
	    helpers.runQuery(this.state.searchTopic, this.state.searchBegin, this.state.searchEnd).then(function(data) {
	        console.log(data);
	    }.bind(this));
  	},
	setTerm: function(topic, begin, end) {
	    this.setState({ searchTopic: topic, searchBegin: begin, searchEnd: end });
	},
	render: function() {
		return(
			<div className="container">
				<div className="jumbotron">
      				<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>
				<div className="row">
					<Search setTerm={this.setTerm} />
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

