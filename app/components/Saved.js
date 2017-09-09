var React = require("react");
var helpers = require("./utils/helpers");
var Saved = React.createClass({
	handleClick: function(item,event){
		event.preventDefault();
		helpers.deleteArticles(item._id).then(function(){
			console.log("deleted article!");
		}.bind(this));
	},
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
		          			< br/>
		          			<button className="btn btn-danger" id={search._id} onClick={this.handleClick.bind(this,search)}>Delete</button>
		          		</div>
		          	)
		          }.bind(this)
		          )}
			      </div>
			    </div>
		    </div>
			</div>
		);
	}
});

module.exports = Saved;