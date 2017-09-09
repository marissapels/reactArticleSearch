var React = require("react");
var helpers = require("./utils/helpers");
var Results = React.createClass({
	getIntialState: function(){
		return {
			headline: "",
			date: "",
			website: ""
		};
	},
	handleClick: function(item,event){
		event.preventDefault();
  		helpers.saveArticles(item.headline.main, item.pub_date, item.web_url).then(function(data){
  			console.log(data);
  		}.bind(this));
	},
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
		          		<div className="well" key={i}>
		          			<h3 id="headline">{search.headline.main}</h3>
		          			<p id="date">{search.pub_date}</p>
		          			<a href={search.web_url} id="website">{search.web_url}</a>
		          			< br/>
		          			<button className="btn btn-primary" onClick={this.handleClick.bind(this,search)}>Save</button>
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

module.exports = Results;