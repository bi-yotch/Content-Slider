$(document).ready(function(){

  var speed = 500, autoswitch = true, autoswitchSpeed = 3000;

  $('.slide').first().addClass('active');
  $('.slide').hide();
  $('.active').show();

  $('#next').on('click', nextSlide);
  $('#previous').on('click', previousSlide);

  if(autoswitch==true)
    setInterval(nextSlide, autoswitchSpeed);
  //Error occurs on using () while calling functions

  //Functions in use
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');

    if($('.oldActive').is(':last-child'))
      $('.slide').first().addClass('active');
    else
      $('.oldActive').next().addClass('active');

    $('.oldActive').removeClass('oldActive');
    $('.slide').slideUp(speed);
    $('.active').slideDown(speed);
  } //Use slide or fade

  function previousSlide(){
    $('.active').removeClass('active').addClass('oldActive');

    if($('.oldActive').is(':first-child'))
      $('.slide').last().addClass('active');
    else
      $('.oldActive').prev().addClass('active');

    $('.oldActive').removeClass('oldActive');
    $('.slide').slideUp(speed);
    $('.active').slideDown(speed);
  }

});
