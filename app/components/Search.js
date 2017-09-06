var React = require("react");
var Link = require("react-router").Link;
var Search = React.createClass({
	getInitialState: function() {
    return { topic: "", begin: "", end: ""};
  },
  handleChange: function(event) {
  	var newState={};
  	newState[event.target.id]=event.target.value;
    this.setState(newState);
  },
  handleSubmit: function(event) {
  	event.preventDefault();
  	this.props.setTerm(this.state.topic);
    this.setState({ topic: "", begin: "", end: "" });
  },
	render: function() {
		return (
			<div className="container">
				<div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
	          <div className="panel-body">
	          	<form onSubmit={this.handleSubmit}>
	            <div className="form-group">
	              <h4 className="">
	                <strong>Topic</strong>
	              </h4>
	              <input
	                value={this.state.topic}
	                type="text"
	                className="form-control text-left"
	                id="topic"
	                onChange={this.handleChange}
	                required
	              />
	            </div>
	            <div className="form-group">
	              <h4 className="">
	                <strong>Start Year</strong>
	              </h4>
	              <input
	                value={this.state.begin}
	                type="text"
	                className="form-control text-left"
	                id="begin"
	                onChange={this.handleChange}
	                required
	              />
	            </div>
	            <div className="form-group">
	              <h4 className="">
	                <strong>End Year</strong>
	              </h4>
	              <input
	                value={this.state.end}
	                type="text"
	                className="form-control text-left"
	                id="end"
	                onChange={this.handleChange}
	                required
	              />
	            </div>
	            <button className="btn btn-primary" type="submit">Submit</button>
	            </form>
	          </div>
	        </div>
        </div>
			</div>
		);
	}
});

module.exports = Search;