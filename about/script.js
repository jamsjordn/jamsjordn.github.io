$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  }); 
while ($( "#about" ).hasClass( "active" ) == false){
	$("#about").addClass("active");
};
});