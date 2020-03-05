$(document).ready(function(){
	console.log("hello");
	$(document).on("click", ".soluDiv > button", function(){
		var x = $(this).attr("id");
		$("#demo"+x).toggle();
		console.log("here", "#demo"+x);
	});
});