

$(function () {

    "use strict";


       //Slider

       $('.team_slide').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    });

    $('.cart_slider').slick({
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
    });

       //Navigation button

       $('.btn_nav button').click(function() {
        $('.header_menu').slideToggle(300,function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });


       //Upload stuffs

       $('.category_arrow i').click(function () {
          $('.category_row4').toggleClass('dispFlex')

       });


       //Button to top

       var $btnTop = $('.btn_top')
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
          var e_top = $('.about_cards').offset().top;
          if(w_top + 700 >= e_top){
              $('.about_card h4').each(function () {
                 $(this).prop('Counter', 0).animate({
                     Counter:$(this).text()
                 },{
                     duration: 3000,
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
    $('a[href*="#categories"],a[href*="#about"],a[href*="#contacts"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });


    //Cart scripts

    $('.header_cart,.cart_top i').click(function () {
       $('.cart').toggleClass('open');
    });


    //Category scripts

    $('.category_card,.category_info i').click(function () {
        $('.category_info').toggleClass('open');
    });


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });



});