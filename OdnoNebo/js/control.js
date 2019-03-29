jQuery(document).ready(function($) {




var $page = $('html, body');
    $('a[href*="#gallery"],a[href*="#about"],a[href*="#contact"],a[href*="#tariff"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    

    
   
       //Button to top

       var $btnTop = $('.arrow_up')
    $(window).on('scroll', function () {
       if ($(window).scrollTop() >= 0){
           $btnTop.fadeIn();

        } else{
           $btnTop.fadeOut();
        }
    });
       $btnTop.on('click',function () {
          $('html,body').animate({scrollTop:0}, 900)
       }); 
    
    
    
    //Lang hover
    
    $(function() {
  $('#b').hover(function() {
    $('#a').css('color', '#fff');
  }, function() {
    // on mouseout, reset the background colour
    $('#b').css('color', '');
    $('#a').css('color', '#fbbf00');
  });
});
     $(function() {
  $('#a').hover(function() {
    $('#a').css('color', '#fff');
  }, function() {
    // on mouseout, reset the background colour
    $('#b').css('color', '');
    $('#a').css('color', '#fbbf00');
  });
});
    
    //Section 2 modal hover
        

    
    // Burger 
    

    $('.burger').click(function(){
        $('.fixed_button').addClass('burger_active');
         $('.fixed_button_close').addClass('burger_active');
        $('.burger').css('display','none');
    });
$('.fixed_button_close').click(function(){
    $('.fixed_button').removeClass('burger_active');
    $('.burger').css('display','flex');
});
    

    if(window.matchMedia('(min-width: 768px)').matches){
     $('.vk').hover(function() {
      $('.vk img').css('margin-top', '-50px');
  }, function() {
         $('.vk img').css('margin-top', '');               
});
       $('.arrow_up').hover(function() {
      $('.arrow_up img').css('margin-top', '-37px');
  }, function() {
         $('.arrow_up img').css('margin-top', '');               
});
       $('.insta').hover(function() {
      $('.insta img').css('margin-top', '-50px');
  }, function() {
         $('.insta img').css('margin-top', '');               
});
    } else{
         $('.vk').hover(function() {
      $('.vk img').css('margin-top', '-40px');
  }, function() {
         $('.vk img').css('margin-top', '');               
});
       $('.arrow_up').hover(function() {
      $('.arrow_up img').css('margin-top', '-30px');
  }, function() {
         $('.arrow_up img').css('margin-top', '');               
});
       $('.insta').hover(function() {
      $('.insta img').css('margin-top', '-40px');
  }, function() {
         $('.insta img').css('margin-top', '');               
}); 
         $('.contact').hover(function() {
      $('.contact img').css('margin-top', '-40px');
  }, function() {
         $('.contact img').css('margin-top', '');               
}); 
         $('.price').hover(function() {
      $('.price img').css('margin-top', '-40px');
  }, function() {
         $('.price img').css('margin-top', '');               
}); 
    }
    
    //Section_3 modal
    
    $('.s3_img_1').click(function() {
      $('.s3_modal_1').css({'opacity': '1','z-index': '100'});
      $('.s3_modal_2').css({'opacity': '','z-index': ''});
      $('.s3_modal_3').css({'opacity': '','z-index': ''});
      $('.s3_overlay').addClass('burger_active');
});
     $('.s3_img_2').click(function() {
      $('.s3_modal_2').css({'opacity': '1','z-index': '100'});
      $('.s3_modal_1').css({'opacity': '','z-index': ''});
      $('.s3_modal_3').css({'opacity': '','z-index': ''});
      $('.s3_overlay').addClass('burger_active');
});
     $('.s3_img_3').click(function() {
      $('.s3_modal_3').css({'opacity': '1','z-index': '100'});
      $('.s3_modal_1').css({'opacity': '','z-index': ''});
      $('.s3_modal_2').css({'opacity': '','z-index': ''});
      $('.s3_overlay').addClass('burger_active');
});
    $('.s3_close svg').click(function() {
      $('.s3_modal_1').css({'opacity': '','z-index': ''});  
      $('.s3_modal_2').css({'opacity': '','z-index': ''});  
      $('.s3_modal_3').css({'opacity': '','z-index': ''});  
      $('.s3_overlay').removeClass('burger_active');
});
    $('.s3_overlay').click(function() {
      $('.s3_modal_1').css({'opacity': '','z-index': ''});  
      $('.s3_modal_2').css({'opacity': '','z-index': ''});  
      $('.s3_modal_3').css({'opacity': '','z-index': ''});  
      $('.s3_overlay').removeClass('burger_active');
});

    //Nav Hover
    
     $('.n1').hover(function() {
      $('.ni1').css({'opacity':'1','right':'-25px'});
  }, function() {
         $('.ni1').css({'opacity':'','right':''});               
});
        $('.n2').hover(function() {
      $('.ni2').css({'opacity':'1','right':'-25px'});
  }, function() {
         $('.ni2').css({'opacity':'','right':''});               
});
    
        $('.n3').hover(function() {
      $('.ni3').css({'opacity':'1','right':'-25px'});
  }, function() {
         $('.ni3').css({'opacity':'','right':''});               
});
    
        $('.n4').hover(function() {
      $('.ni4').css({'opacity':'1','right':'-25px'});
  }, function() {
         $('.ni4').css({'opacity':'','right':''});               
});
    
   
$('.modal_slider').slick({
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
}); 
    
    
    // Parallax
    
    var object1=$('.s2_cloud_1');
    var object2=$('.s2_cloud_2');
    var object3=$('.s2_cloud_3');
    var object4=$('.s2_cloud_4');
    
    var layer = $('.layer');
    
    layer.mousemove(function(e){
        var valueX = (e.pageX * -2 / 100);
        var valueY = (e.pageY * -2 / 100);
    
        object1.css({
            'transform':'translate3d('+valueX / 2 +'px,'+valueY / 2 +'px,0)'
          });
        });
        layer.mousemove(function(e){
        var valueX = (e.pageX * -2 / 30);
        var valueY = (e.pageY * -2 / 30);
    
        object2.css({
            'transform':'translate3d('+valueX / 2 +'px,'+valueY / 2 +'px,0)'
          });
        });
        layer.mousemove(function(e){
        var valueX = (e.pageX * -2 / 100);
        var valueY = (e.pageY * -2 / 100);
    
        object3.css({
            'transform':'translate3d('+valueX / 2 +'px,'+valueY / 2 +'px,0)'
          });
        });
        layer.mousemove(function(e){
        var valueX = (e.pageX * -2 / 40);
        var valueY = (e.pageY * -2 / 40);
    
        object4.css({
            'transform':'translate3d('+valueX / 2 +'px,'+valueY / 2 +'px,0)'
        });
    
});
    

        

        
        
 
     
    
    

    if(window.matchMedia('(min-width: 1300px)').matches)
    {
          $('.s3_hover_1').hover(function() {
      $('.d1').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
      $('.im1').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_1').css({'animation': 'transit 0.2s finite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { 
      $('.s2_modal_1').css({'display': 'none'});
     $('.im1').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                  $('.d1').css('box-shadow', '');
});
  $('.s3_hover_2').hover(function() {
      $('.d2').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
       $('.im2').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_2').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_2').css({'display': 'none'});
                  $('.im2').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d2').css('box-shadow', '');
});
  $('.s3_hover_3').hover(function() {
      $('.d3').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im3').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_3').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_3').css({'display': 'none'});
                  $('.im3').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d3').css('box-shadow', '');
});
  $('.s3_hover_4').hover(function() {
      $('.d4').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im4').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_4').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_4').css({'display': 'none'});
                  $('.im4').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d4').css('box-shadow', '');
});
  $('.s3_hover_5').hover(function() {
      $('.d5').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.d5').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im5').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_5').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_5').css({'display': 'none'});
                  $('.im5').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                  $('.d5').css('box-shadow', '');
});
  $('.s3_hover_6').hover(function() {
      $('.d6').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im6').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_6').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_6').css({'display': 'none'});
                  $('.im6').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d6').css('box-shadow', '');
});
  $('.s3_hover_7').hover(function() {
      $('.d7').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im7').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_7').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_7').css({'display': 'none'});
                  $('.im7').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d7').css('box-shadow', '');
});
  $('.s3_hover_8').hover(function() {
      $('.d8').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im8').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_8').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_8').css({'display': 'none'});
                  $('.im8').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d8').css('box-shadow', '');
});
  $('.s3_hover_9').hover(function() {
      $('.d9').css('box-shadow', ' inset 0px 0px 10px #FFFFFF, inset 0px 0px 10px #FFFFFF');
        $('.im9').css({'animation': 'rotateSide 0.5s infinite ease',
                        'animation-iteration-count': '1',
                       });
    $('.s2_modal_9').css({'animation': 'transit 0.2s infinite linear', 
                          'display': 'block',
                          'animation-iteration-count': '1'
                         });
  }, function() { $('.s2_modal_9').css({'display': 'none'});
                  $('.im9').css({'animation': 'rotateSide2 0.5s infinite ease',
                    'animation-iteration-count': '1'
                   });
                   $('.d9').css('box-shadow', '');
});
    } else {
             
        $('.s3_hover_1').click(function() {
      $('.s2_modal_1').addClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_2').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').addClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_3').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').addClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_4').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').addClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_5').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').addClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_6').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').addClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_7').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').addClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_8').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').addClass('anim_2');
      $('.s2_modal_9').removeClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
            $('.s3_hover_9').click(function() {
      $('.s2_modal_1').removeClass('anim_2');
      $('.s2_modal_2').removeClass('anim_2');
      $('.s2_modal_3').removeClass('anim_2');
      $('.s2_modal_4').removeClass('anim_2');
      $('.s2_modal_5').removeClass('anim_2');
      $('.s2_modal_6').removeClass('anim_2');
      $('.s2_modal_7').removeClass('anim_2');
      $('.s2_modal_8').removeClass('anim_2');
      $('.s2_modal_9').addClass('anim_2');
            $('.s3_overlay').addClass('mode_active');    
  });
        
        
        
        
        $('.s3_overlay').click(function(){
            $('.s2_modal_1').removeClass('anim_2');
            $('.s2_modal_2').removeClass('anim_2');
            $('.s2_modal_3').removeClass('anim_2');
            $('.s2_modal_4').removeClass('anim_2');
            $('.s2_modal_5').removeClass('anim_2');
            $('.s2_modal_6').removeClass('anim_2');
            $('.s2_modal_7').removeClass('anim_2');
            $('.s2_modal_8').removeClass('anim_2');
            $('.s2_modal_9').removeClass('anim_2');
             $('.s3_overlay').removeClass('mode_active');  
        });
    }

//Gallery slider

 $('.s4_main_text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
 arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
     autoplay: true,
  autoplaySpeed: 8000,
   pauseOnHover:false,
     draggable: false,
       swipe: false
  });


   var $slider = $('.s4_main_img');
if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
 arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
 autoplay: true,
  autoplaySpeed: 8000,
     pauseOnHover:false,
      draggable: false,
      swipe: false
  });
}
$('.slick_next').on('click', function() {
  $('.s4_main_img').slick('slickNext');
});
$('.slick_prev').on('click', function() {
  $('.s4_main_img').slick('slickPrev');
});
$('.slick_next').on('click', function() {
  $('.s4_main_text').slick('slickNext');
});
$('.slick_prev').on('click', function() {
  $('.s4_main_text').slick('slickPrev');
});

$('.div_menu1').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(0); 
     var slider3 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(0); 
})
$('.div_menu2').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(1); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(1); 
})
$('.div_menu3').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(2);
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(2);
})
$('.div_menu4').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(3); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(3);
})
$('.div_menu5').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(4); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(4);
})
$('.div_menu6').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(5);
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(5);
})
$('.div_menu7').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(6); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(6);
})
$('.div_menu8').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(7); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(7);
})
$('.div_menu9').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(8); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(8);
})
$('.div_menu10').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(9); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(9);
})
$('.div_menu11').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(10); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(10);
})
$('.div_menu12').click(function(){
    var slider2 = $( '.s4_main_img');
     slider2[0].slick.slickGoTo(11); 
     var slider2 = $( '.s4_main_text');
     slider2[0].slick.slickGoTo(11);
});





   
if(window.matchMedia('(max-width: 768px)').matches){
                    
        $('.s3_hover_1').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(0); 
  });
       $('.s3_hover_2').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(1); 
  });
       $('.s3_hover_3').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(2); 
  });
       $('.s3_hover_4').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(3); 
  });
    $('.s3_hover_5').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(4); 
  });
      
       $('.s3_hover_6').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(5); 
  });
       $('.s3_hover_7').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(6); 
  });
       $('.s3_hover_8').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(7); 
  });
       $('.s3_hover_9').click(function() {
      $('.modal_slider').addClass('modal_slid_act');
      $('.modal_slider_close').addClass('modal_slid_act_close');
      $('.s2_container_2 .s3_overlay').addClass('mode_active');
      var slider = $( '.modal_slider' );
     slider[0].slick.slickGoTo(8); 
  });
    
    
    $('.s2_container_2 .s3_overlay').click(function(){
        $('.modal_slider').removeClass('modal_slid_act');
        $('.modal_slider_close').removeClass('modal_slid_act_close');
         $('.s2_container_2 .s3_overlay').removeClass('mode_active'); 
    });
     $('.modal_slider_close').click(function(){
        $('.modal_slider').removeClass('modal_slid_act');
        $('.modal_slider_close').removeClass('modal_slid_act_close');
          $('.s2_container_2 .s3_overlay').removeClass('mode_active'); 
    });
        
}


//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [47.228774, 39.743183], // координаты центра на карте
    zoom: 16, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [47.228774, 39.743183] // координаты, где будет размещаться флажок на карте
    }
  });
    // ymaps.ready(init);   
//    var myPlacemark1;
//        function init(){ 
//            var myMap = new ymaps.Map("map", {
//                center: [47.228774,39.743183],
//                zoom: 18
//            }); 
//            myPlacemark1 = new ymaps.Placemark([47.228774,39.743183],{
//                hintContent: 'Одно Небо'
//            });
//            myMap.geoObjects.add(myPlacemark1);
//        }
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=<f6b695f5-5309-408a-afcd-25de33782b75>&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
//   $.parallaxify.positionProperty.rotate = {
//        setPosition: function($element, left, originalLeft, top, originalTop) {
//            $element.css('transform', 'rotateX(' + left + 'deg) rotateY(' + top + 'deg)');
//        }
//    };
//        
//    // using your own positioning function
//    $('.s2_cloud_1').parallaxify({
//        positionProperty: 'rotate'
//    });

$.parallaxify.positionProperty.mytransform= {
        setPosition: function($element, left, originalLeft, top, originalTop) {

            $element.css('transform', 'translate(' + (originalLeft - left) + 'px, ' + (originalTop - top) + 'px)');
       }
   };
        
 $('#cloud1').parallaxify();
$('#cloud2').parallaxify();
$('.s2_cloud_3').parallaxify();
$('.s2_cloud_4').parallaxify();
$('.s2_cloud_5').parallaxify();
$('.s2_cloud_6').parallaxify();
$('.s2_cloud_7').parallaxify();
$('.s2_cloud_8').parallaxify();

    
      $.parallaxify({
        // enable parallax effect for horizontal, vertical or both directions
        horizontalParallax: true,
        verticalParallax: false,

        // enable or disable parallax effect for elements or backgrounds
        parallaxBackgrounds: true,
        parallaxElements: true,

        // set which positioning property is to be used
        // options include 'position' or 'transform' using css transformations
        positionProperty: 'position',

        // enable for responsive layouts
        // (upon orientation changes or window resizing element positions are reevaluated
        responsive: false,

        // enable or disable mouse or gyroscope data as input for the plugin
        useMouseMove: false,
        useGyroscope: true,

        // use a Low Pass Filter to smooth sensor readings (1 = no filter)
        alphaFilter: 0.9,

        // set which motion type algorithm is to be used
        // options include 'natural', 'linear', 'gaussian', or 'performance'
        motionType: 'natural',
        mouseMotionType: 'gaussian',

        // define which sensor input has priority over the other
        // options are either 'mouse' or 'gyroscope'
        inputPriority: 'mouse',

        // define the delta angle (0 < motionAngle < 90) 
        // that is used to render max parallax in this direction
        motionAngleX: 40,
        motionAngleY: 80,

        // enable of adjustment of base position (using a Low Pass Filter)
        // (adapting to device usage while plugin is running)
        adjustBasePosition: true,
        // alpha for Low Pass Filter used to adjust average position
        alphaPosition: 0.05,
    });


//   // Bind an event to window.orientationchange that, when the device is turned,
//// gets the orientation and displays it to on screen.
//$( window ).on( "orientationchange", function( event ) {
//  $('.s2_cloud_1').toggleClass('transform0');
//  $('.s2_cloud_2').toggleClass('transform1');
//  $('.s2_cloud_3').toggleClass('transform0');
//  $('.s2_cloud_4').toggleClass('transform1');
//  $('.s2_cloud_5').toggleClass('transform0');
//  $('.s2_cloud_6').toggleClass('transform1');
//  $('.s2_cloud_7').toggleClass('transform0');
//  $('.s2_cloud_8').toggleClass('transform0');
//  
//});


});



