var React = require("react");
var helpers = require("./utils/helpers");
var Saved = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="col-lg-12">
		      <div className="panel panel-primary">
		        <div className="panel-heading">
		          <h3 className="panel-title">Saved Articles</h3>
		        </div>
			      <div className="panel-body">
			      	{this.props.saved.map(function(search,i){
		          	return (
		          		<div className="well" key={i}>
		          			<h3 id="headline">{search.title}</h3>
		          			<p id="date">{search.date}</p>
		          			<a href={search.url} id="website">{search.url}</a>
		          		</div>
		          	)
		          }
		          )}
			      </div>
			    </div>
		    </div>
			</div>
		);
	}
});

module.exports = Saved;