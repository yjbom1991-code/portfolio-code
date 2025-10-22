$(document).ready(function(){
   
     
    /* animation */
    $(window).scroll(function(){
        
        var wds = $(this);
        var p = $('p');
        var dx = $('.designer_box');
        var lx = $('.location_img_box');
        
        animation(wds,$('.scroll_svg'));
        animation(wds,$('.story_middle'));
        animation(wds,$('.story_left'));
        animation(wds,$('.story_text').find(p));
        animation(wds,$('#designer').find(p));
        animation(wds,dx.find('div'));
        animation(wds,$('.location_box'));
        animation(wds,lx.find(p));
        
    });
    
    /* animation function */
    function animation(ws,pr) {
        if(ws.scrollTop() >= pr.offset().top - ws.height()){
            pr.addClass('ani');
        } else {
            pr.removeClass('ani');
        }
    }
    
    /* slick */
    
    $('.swiper_list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slick-prev svg'),
        nextArrow: $('.slick-next svg'),
        responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        
            {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
        
    });
    
    /* background change */
    
    /* var now_img, next_img;
    function fade_change(){
     now_img = $('.main_slide div:eq(0)');
     next_img = $('.main_slide div:eq(1)');
     next_img.addClass('active').css('opacity',0).animate({'opacity':1},2000, function(){
         $('.main_slide').append(now_img);           //肄쒕갚
         now_img.removeClass('active');
     });
    }
    
    setInterval(fade_change(), 2000); */
    
    
    
    /* vivus */
    
    var svg1 = new Vivus('sika_svg01',{duration:80,type:'delayed'}, function(){$('#sika_svg01').find('.st1').addClass('fill');});
    
    var svg2 = new Vivus('design_svg01',{duration:80,type:'delayed'}, function(){$('#design_svg01').find('.st1').addClass('fill');});
    
});