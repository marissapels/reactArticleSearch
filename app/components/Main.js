var React = require("react");
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");
var helpers = require("./utils/helpers");
var Main = React.createClass({
	getInitialState: function(){
		return{ searchTopic: "", searchBegin:"", searchEnd:"", results:[]};
	},
	componentDidUpdate: function() {
	    // Run the query for the address
	    helpers.runQuery(this.state.searchTopic, this.state.searchBegin, this.state.searchEnd).then(function(data) {
	        console.log(data);
	        this.setState({results: data})
	    }.bind(this));
  	},
	setTerm: function(topic, begin, end) {
	    this.setState({ searchTopic: topic, searchBegin: begin, searchEnd: end });
	},
	render: function() {
		return(
			<div className="container">
				<div className="jumbotron">
      				<h1 className="text-center"><strong>New York Times Search</strong></h1>
				</div>
				<div className="row">
					<Search setSearch={this.setTerm} />
				</div>
				<div className="row">
					<Results returnResults={this.state.results}/>
				</div>
				<div className="row">
					<Saved />
				</div>
			</div>
		);
	}
});
module.exports = Main;

