var React = require("react");
var Link = require("react-router").Link;
var Results = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="col-lg-12">
	        <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
	          <div className="panel-body">
		          {this.props.returnResults.map(function(search,i){
		          	return (
		          		<p key={i}>{search.headline.main}{"\n"}{search.pub_date}{"\n"}{search.web_url}</p>
		          		// <p key={i}>{search.pub_date}</p>
		          		// <p key={i}>{search.web_url}</p>
		          	);
		          })}
	        	</div>
	      	</div>
        </div>
			</div>
		);
	}
});

module.exports = Results;