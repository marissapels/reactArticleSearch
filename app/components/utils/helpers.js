var axios = require("axios");
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


var helper ={
	runQuery: function(topic, begin, end){
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic; 
		+ "&begin_date="+begin+"0101&end_date=" + end +"0101";
		return axios.get(queryURL).then(function(response){
			console.log(response);
		})
	}
}
module.exports = helper;