$(document).ready(function(){
    

    
    /* menu show */
    
    var navButton = $('#navWrap button');
    
    $(navButton).click(function(){
        if($(navButton).hasClass('on')){
            $(navButton).removeClass('on');
            $('nav').slideUp(400);
        } else {
            $(navButton).addClass('on');
            $('nav').slideDown(400);
        }
    });
    
    
    
    /* navigation scroll */
    
    var bodyOffset = $('body').offset(),
        headerImg = $('#navWrap').children('h1').find('img');
    
    
    
    
    $(window).scroll(function(){
       var scroll = $(window).scrollTop();
        
       if(scroll> bodyOffset.top) {
           $('#navWrap').addClass('scroll_on');
           $('nav .gnb li a').addClass('scroll_on_02');
           headerImg.attr('src','img/sika_logo_header_black.svg');
           
       } else {
           $('#navWrap').removeClass('scroll_on');
           $('nav .gnb li a').removeClass('scroll_on_02');
           headerImg.attr('src','img/sika_logo_header.svg');
       }
        if($(window).width()<1024) {
            if($(navButton).hasClass('on')){
            $('#navWrap').removeClass('scroll_on');
            headerImg.attr('src','img/sika_logo_header.svg');
        }
        $(navButton).click(function(){
       if($(navButton).hasClass('on')){
            $('#navWrap').removeClass('scroll_on');
            headerImg.attr('src','img/sika_logo_header.svg');
        } else {
            $('#navWrap').addClass('scroll_on');
            headerImg.attr('src','img/sika_logo_header_black.svg');
        }
    });   
        }
        $(window).resize(function(){
        if($(window).width() > 1024) {
            if($(navButton).hasClass('on')){
            $('#navWrap').addClass('scroll_on');
            headerImg.attr('src','img/sika_logo_header_black.svg');
        }
            
        }
    });
        $(window).resize(function(){
        if($(window).width() < 1024) {
            if($(navButton).hasClass('on')){
            $('#navWrap').removeClass('scroll_on');
            headerImg.attr('src','img/sika_logo_header.svg');
        } else {
            $('#navWrap').addClass('scroll_on');
           $('nav .gnb li a').addClass('scroll_on_02');
           headerImg.attr('src','img/sika_logo_header_black.svg');
        }
            
        }
    });
   });
    
});