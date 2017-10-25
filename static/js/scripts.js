var callback = function () {

	$('.icons-red').each(function () {
		height = $(this).height();
		$(this).animate({
			height: 14,
		}, 2000);
	});
};
$(document).ready(callback);

var resize;
window.onresize = function () {
	clearTimeout(resize);
	resize = setTimeout(function () {
		callback();
	}, 100);
};