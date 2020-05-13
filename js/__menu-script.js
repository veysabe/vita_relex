$(function () {
  $(document).scroll(function () {
	  let $menu = $(".menu-block");
	  $menu.toggleClass('scroll', $(this).scrollTop() > 650);
	});
})();