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

});
