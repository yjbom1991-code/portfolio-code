$(document).ready(function(){
  
  $(window).scroll(function(){
    pagercss();
		
    scrollOn('.wrap','div:first-child');
    scrollOn('.textBox','h2');
    scrollOn('.textBox','p');
    scrollOn('.textBox','button');
    
    scrollOn('.content','.finestT h2');
    scrollOn('.content','.finestT p');
    scrollOn('.content','.finestT div img');
    
    scrollOn('.enjoyT ','h2');
    scrollOn('.enjoyT ','p');
    scrollOn('.enjoyT','img:first-child');
    scrollOn('.enjoyT','img:last-child');
    
    scrollOn('.conect','.line');
    scrollOn('.conect','button');
    scrollOn('.conect','.svga');
    
    
    if($(window).scrollTop() + $(window).height() > $('.finestT>a').offset().top){
      $('.finestT>a').addClass('scrollOn');
    }
    
    if($(window).scrollTop() + $(window).height() > $('.enjoyT>a').offset().top){
      $('.enjoyT>a').addClass('scrollOn');
    }
    
    
  });
  
/* -------- main svg --------- */
  new Vivus('mainsvg1');
  new Vivus('mainsvg2');

  new Vivus('aboutSVG');
  new Vivus('enjoySVG');
  
/* ---------- scrollmotion fx ----------- */  
  function scrollOn(pa,ch){  
    if($(window).scrollTop() + $(window).height() > $(pa).offset().top - 20){
      $(pa).find(ch).addClass('scrollOn');
    }else{
      $(pa).find(ch).removeClass('scrollOn');
    }
  }
  
  function pagercss(){
    var li = $('.pager').find('li');
    var button = $('.pager').find('button');
    var scrollbottom = $(window).scrollTop()+$(window).height();
    
    
    if($(window).scrollTop() + $(window).height() < $('.slider').offset().top + $('.slider').outerHeight()*1.2){
      li.removeClass('on');
      button.removeClass('on');
      button.eq(3).addClass('on');
      li.eq(0).addClass('on');
    }else if($(window).scrollTop() + $(window).height() < $('.finestT').offset().top + $('.finestT').outerHeight()*1.3){
      li.removeClass('on');
      button.removeClass('on');
      button.eq(2).addClass('on');
      li.eq(1).addClass('on');
    }else if($(window).scrollTop() + $(window).height() < $('.enjoyT').offset().top + $('.enjoyT').outerHeight()*1.4){
      li.removeClass('on');
      button.removeClass('on');
      button.eq(1).addClass('on');
      li.eq(2).addClass('on');
    }else{
      li.removeClass('on');
      button.removeClass('on');
      button.eq(0).addClass('on');
      li.eq(3).addClass('on');
    }
  }
  
  /* button scroll */
  function pagebutton (num,sec){
  $('.pager>button').eq(num).click(function(){
    var scr = $(sec).offset().top;
    $('body,html').scrollTop(scr);
  })
  }
  
  pagebutton (3,'.slider');
  pagebutton (2,'.finestT');
  pagebutton (1,'.enjoyT');
  pagebutton (0,'.conect');
  
  
  
  /* ------Best Product slider (slick)------ */
  $('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
    dots: true,
    arrows:true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1.66,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        autoplay: true,
				autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1 ,
        arrows: true,dots: true
      }      
    }]
    
  });
	
  
});