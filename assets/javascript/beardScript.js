$(document).ready(function() {
	console.log("pre-stuff");
	$(".galleryImage").click(function(){
		console.log("stuff");
		var picSource=$(this).attr("src");
		var beardStyle=$(this).attr("title");
		console.log(picSource);
		console.log(beardStyle);
		// console.log($(".reserveStyle").attr("src"));
		localStorage.setItem("urlPath",picSource);
		localStorage.setItem("beardStyle",beardStyle)
		// console.log($(".reserveStyle").attr("src"));
		// console.log($(this).attr("title"));
	});

	// $(".galleryImage").hover(function(){
	// 	$('.putOverPic').removeClass('hideIt');
	// }, function(){
	// 	$('.putOverPic').addClass('hideIt');
	// });
});