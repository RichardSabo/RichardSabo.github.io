$(document).ready(function() {
    "use strict"




  
  

       //Button to top

       var $btnTop = $('#btn_top')
    $(window).on('scroll', function () {
       if ($(window).scrollTop() >= 100){
           $btnTop.fadeIn();

        } else{
           $btnTop.fadeOut();
        }
    });
       $btnTop.on('click',function () {
          $('html,body').animate({scrollTop:0}, 900)
       });




    //Scroll animate

    var $page = $('html, body');
    $('a[href*="#gallery"],a[href*="#about"],a[href*="#contact"],a[href*="#works"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    $('.header_burger').click(function(){
      $(this).toggleClass('open')
    })

    $('.header_burger').click(function(){
      $('.menu_adaptive').toggleClass('show');
    });


   $(".gall").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
      removalDelay: 300,
       mainClass: 'mfp-fade'
   });

     });


