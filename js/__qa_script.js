$(function() {
  $('.qa-block-answers__card-title').click(function() {
    var $item = $(this).parents('.qa-block-answers__card');
    
    $item.toggleClass('qa-block-answers__card--active').siblings('.qa-block-answers__card--active').removeClass('qa-block-answers__card--active');
  });
});