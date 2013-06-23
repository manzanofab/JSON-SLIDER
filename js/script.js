$.getJSON("data.json",function(data){
//	console.log (data);
var output = "";
$.each(data,function(key,val){
	console.log (val.title);
	output += "<div class=\"row-fluid\"><div class=\"span6 well\"><h3 class=\"pagination-centered\">";
	output += val.title+"</h3><hr><img src=\"images/"+val.image+"\" class=\"pull-left span4 fabian\" ><p>";
	output += val.description+"<p></div></div>";
	});
	$(".results").html(output);		
});