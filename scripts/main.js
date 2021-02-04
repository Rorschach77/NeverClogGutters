$(() => {
	$("header").load("./templates/header.html", function () {
		if (activateMenu !== undefined) {
			activateMenu( "home" );
		}
	});
	$("footer").load("./templates/footer.html", function () {
		$(".current-year").html(new Date().getFullYear());
	});
});

activateMenu = () =>
{
	$(".menu-link").removeClass("active");
	$(".menu-link-home").addClass("active");
};