var React = require("react");
var Link = require("react-router").Link;
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
	          </div>
	        </div>
        </div>
			</div>
		);
	}
});

module.exports = Saved;