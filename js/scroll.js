$(function(){

$('.map_link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#map').offset().top }, 1000);
  e.preventDefault();
});

});

$(function(){

$('.del').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#del').offset().top }, 1000);
  e.preventDefault();
});

});

$(function(){

$('.form_link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#form').offset().top }, 1000);
  e.preventDefault();
});

});