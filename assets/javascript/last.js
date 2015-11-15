$(document).ready(function() {
	var picSource=localStorage.getItem("urlPath");
	console.log("linked up");
	console.log("last.html is ready");
	console.log(picSource);
	console.log($(".reserveStyle"));
	$(".reserveStyle").attr("src")
	$(".reserveStyle").attr("src", picSource);
	var beardStyle=localStorage.getItem("beardStyle");
	// console.log(beardStyle);
	$(".beardStyle").val(beardStyle);
	if (beardStyle==="") {
		$(".reserveInfo").val("");
	} else {
		console.log("got into the else");
		console.log(beardStyle);
		$(".reserveInfo").before("You have selected the " + beardStyle);
	};
	localStorage.setItem("urlPath","");
	localStorage.setItem("beardStyle","");
});