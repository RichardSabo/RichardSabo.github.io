$(document).ready(function() {
    "use strict"


   //Slider

       $('.team_slider').slick({
        slidesToScroll:1,
        autoplay:true,
    });

  
  

       //Button to top

       var $btnTop = $('#btn_top')
    $(window).on('scroll', function () {
       if ($(window).scrollTop() >= 700){
           $btnTop.fadeIn();

        } else{
           $btnTop.fadeOut();
        }
    });
       $btnTop.on('click',function () {
          $('html,body').animate({scrollTop:0}, 900)
       });


       //Couting animate

       var show = true;

       $(window).on('scroll', function () {

           if(!show) return false;

          var w_top = $(window).scrollTop();
          var e_top = $('#about').offset().top;
          if(w_top>= e_top){
              $('.about_block_box h2').each(function () {
                 $(this).prop('Counter', 0).animate({
                     Counter:$(this).text()
                 },{
                     duration: 2000,
                     easing:'swing',
                     step:function (now) {
                         $(this).text(Math.ceil(now));
                     }
                 });
              });
              show = false;
          }
       });



    //Scroll animate

    var $page = $('html, body');
    $('a[href*="#gallery"],a[href*="#about"],a[href*="#contact"]').click(function() {
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