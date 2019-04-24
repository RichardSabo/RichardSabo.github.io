$( document ).ready(function() {
    
    $('.head_top_btn').click(function(){
        $('nav').addClass('active');
        $('.nav_close_mob').addClass('active');
        $('.section_4 .s4_overlay').addClass('active');
    });
    
    $('.nav_close_mob').click(function(){
        $('nav').removeClass('active');
         $('.nav_close_mob').removeClass('active');
              $('.section_4 .s4_overlay').removeClass('active');
    })
    
    
    
$('.s10_slider').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [{
    breakpoint: 1280,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
    },
        breakpoint: 768,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      }
  }]
    
});
        
$('.s13_slider').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
      responsive: [{
    breakpoint: 1280,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
    },
    breakpoint: 768,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      }
  }]
});

$('.s4_title1 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').addClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title2 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').addClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title3 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').addClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title4 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').addClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title5 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').addClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title6 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').addClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    $('.s4_title7 .s4_title_more').click(function(){
    $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').addClass('active');
    $('.section_4 .s4_overlay').addClass('active');
});
    
    $('.section_4 .s4_overlay').click(function(){
     $('.s4_title1 .s4_title_hidden').removeClass('active');
    $('.s4_title2 .s4_title_hidden').removeClass('active');
    $('.s4_title3 .s4_title_hidden').removeClass('active');
    $('.s4_title4 .s4_title_hidden').removeClass('active');
    $('.s4_title5 .s4_title_hidden').removeClass('active');
    $('.s4_title6 .s4_title_hidden').removeClass('active');
    $('.s4_title7 .s4_title_hidden').removeClass('active');
        $('.section_4 .s4_overlay').removeClass('active');
        $('.head_bottom li').removeClass('active');
          $('nav').removeClass('active');
         $('.nav_close_mob').removeClass('active');
    });
    
    $('.s4_title1 .s4_title_hid_close').click(function(){
       $('.s4_title1 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title2 .s4_title_hid_close').click(function(){
       $('.s4_title2 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title3 .s4_title_hid_close').click(function(){
       $('.s4_title3 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title4 .s4_title_hid_close').click(function(){
       $('.s4_title4 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title5 .s4_title_hid_close').click(function(){
       $('.s4_title5 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title6 .s4_title_hid_close').click(function(){
       $('.s4_title6 .s4_title_hidden').removeClass('active');
    });
     $('.s4_title7 .s4_title_hid_close').click(function(){
       $('.s4_title7 .s4_title_hidden').removeClass('active');
    });
    
    $('.head_tablet_btn').click(function(){
       $('.head_bottom li').toggleClass('active');
        $('.section_4 .s4_overlay').addClass('active');
    });
    
    
    
    $('.s3_row2_img1').resizable({
         handles: 'e',
         containment: 'parent'
    });
     $('.s3_row4_img1').resizable({
         handles: 'e',
         containment: 'parent'
    });
     $('.s3_row6_img1').resizable({
         handles: 'e',
         containment: 'parent'
    });
});