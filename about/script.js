  $.get("header.html", function(data) {
    $("#header").html(data);
  }); 
$(document).ready(function(){ 
while ($( "#about" ).hasClass( "active" ) == false){
	$("#about").addClass("active");
};
});