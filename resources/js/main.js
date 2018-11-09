$(document).ready(function(){

    $('.dropdown-toggle').click(function(e){

      $(this).siblings('.dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();

    });

    $('html').click(function() {

      $('.dropdown').hide();

    });

    $('#nav-toggle').on('click', function() {

      this.classList.toggle('active');

    });

    $('#nav-toggle').click(function() {

        $('nav.desktop').toggle();

    });

    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');

        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

      });

});
