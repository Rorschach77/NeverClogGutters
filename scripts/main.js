$(() => {
	$("header").load("./templates/header3.html", function () {
	});
	$("nav").load("./templates/nav.html", function () {
		if (activateMenu !== undefined) {
			activateMenu("home");
		}
	});
	$("footer").load("./templates/footer3.html", function () {
		$(".current-year").html(new Date().getFullYear());
	});

	window.onscroll = function () { onScroll() };
});

activateMenu = () => {
	$(".nav-link").removeClass("active");
	$(".nav-link-home").addClass("active");
};

onScroll = () => {
	var mybutton = document.getElementById("back-to-top");

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

backToTop = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}