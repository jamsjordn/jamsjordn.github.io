
$(document).ready(function(){
	$("#images button").each(function( index, element ){
		$(this).click(function(){
			var file = $(this).html();
			$("#image").css("background-image","url('"+file+"')");});
	});
	$("#logos button").each(function( index, element ){
		$(this).click(function(){
			var file = $(this).html();
			$("#logo").css("background-image","url('"+file+"')");});
	});
	$("#inputs #brightness").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	$("#inputs #contrast").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	$("#inputs #top").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	$("#inputs #left").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	
	$("#inputs #hueShift").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	
	$("#inputs #size").each(function( index, element ){
		$(this).change(function(){
			changeFilter();
		});
	});
	function changeFilter(){
			var brightness = $("#brightness").val();
			var contrast = $("#contrast").val();
			var hueShift = $("#hueShift").val();
			$("#image").css("filter","brightness("+brightness+") contrast("+contrast+") hue-rotate("+hueShift+"deg)");
			
			var size = $("#size").val();
			$("#logo").css("width",size+"px");
			$("#logo").css("height",size+"px");
			
			var left = $("#left").val();
			$("#logo").css("top",left+"%");
			
			var top = $("#top").val();
			$("#logo").css("top",top+"%");
		
	}
});