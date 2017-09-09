var axios = require("axios");
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


var helper ={
	runQuery: function(topic,begin,end){
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + topic
		+ "&begin_date="+begin+"0101&end_date=" + end +"0101";
		console.log(queryURL);
		return axios.get(queryURL).then(function(response){
			// console.log(response);
			var result=response.data.response.docs.slice(0,5)
			// console.log("RESULT: "+result);
			return result;
		})
	},
	getArticles: function() {
    	return axios.get("/api");
  	},
  	saveArticles: function(headline, date, website) {
    	return axios.post("/api", 
    		{ 
    			title: headline, 
    			date: date, 
    			url: website 
    		});
  	},
  	deleteArticles:function(id){
  		return axios.delete("/api/"+id, {_id: id});
  	}
}
module.exports = helper;