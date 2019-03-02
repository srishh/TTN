$(function() {
	var backgrounds = new Array();
	backgrounds[0]= "url(images/banner-bg-1.jpg)";
	backgrounds[1]= "url(images/banner-bg-2.jpeg)";
	backgrounds[2]= "url(images/banner-bg-3.jpg)";
	var current = 0;
	function nextBackground() {
	$(".partner").css(
	'background-image',
	backgrounds[current = ++current % backgrounds.length]
	);

	setTimeout(nextBackground, 2000);
	}
	setTimeout(nextBackground, 2000);
	console.log(background[0]);
	exit();
	$(".partner").css('background-image', backgrounds[0]);
});