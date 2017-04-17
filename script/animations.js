$(document).ready(function()
{
	$("#play").click(function()
	{
		$(this).addClass("hidden");
	})

	var list = $(".list");
	var hambIcon = $(".icon-bar");
	var signInButton = $(".sign-in-button");
	
	//show or hide hamb menu
	function hambMenuToggle(){
		list.toggleClass("showed");
		hambIcon.toggleClass("checked");
		signInButton.toggleClass("showed");
	}

	$("#hamb").click(hambMenuToggle);

	//Calculating bar width for sliding bar
	function barWidth (className){
		var lineWidth = $(className).outerWidth();
		var lineBeginning = $(className).offset().left - $("#navigation").offset().left;
		console.log("beg" + lineBeginning);
		console.log("width" + lineWidth);
		bar.css({ width: lineWidth, left: lineBeginning});
	}

	var bar = $(".animation");
	var activePage = $(".slide.active");
	$(window).on('load', function(){barWidth(activePage)});

	$(".slide").hover(function(){barWidth(this);},function(){barWidth(".active");});

	$(".slide").click(function()
	{
		$(".active").removeClass("active");
		$(this).addClass("active");
		hambMenuToggle();
	});
});