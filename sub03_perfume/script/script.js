$(function(){
  // nav메뉴
  $('.mbar').click(function(){
    $('nav').stop().animate({
      right: '0'
    },800)
  })
  $('.cbtn').click(function(){
    $('nav').stop().animate({
      right: '-100%'
    })
  })
  $(window).resize(function(){
    $('nav').css({
      right: '-100%'
    })
  })

  // 상단메뉴 스크롤
  let scr = 0;

  $(window).scroll(function(){
    let scrollT = $(window).scrollTop();
    // console.log(scrollT)
  
    if(scrollT > scr){
      $('header').addClass('hide')
    } else {
      $('header').removeClass('hide')
    }
  
    scr = scrollT;
  })

  // section 메뉴 선택
  $('.subM01').click(function(){
    $(this).css({
      fontWeight: '500',
      borderBottom: '2px solid #445D5D'
    })
    $('.subM02').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM03').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM04').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })

    $('.cot').css({display: 'block'})
    $('.flo').css({display: 'none'})
    $('.fru').css({display: 'none'})
    $('.cit').css({display: 'none'})
  })
  $('.subM02').click(function(){
    $(this).css({
      fontWeight: '500',
      borderBottom: '2px solid #445D5D'
    })
    $('.subM01').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM03').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM04').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })

    $('.cot').css({display: 'none'})
    $('.flo').css({display: 'block'})
    $('.fru').css({display: 'none'})
    $('.cit').css({display: 'none'})
  })
  $('.subM03').click(function(){
    $(this).css({
      fontWeight: '500',
      borderBottom: '2px solid #445D5D'
    })
    $('.subM01').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM02').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM04').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })

    $('.cot').css({display: 'none'})
    $('.flo').css({display: 'none'})
    $('.fru').css({display: 'block'})
    $('.cit').css({display: 'none'})
  })
  $('.subM04').click(function(){
    $(this).css({
      fontWeight: '500',
      borderBottom: '2px solid #445D5D'
    })
    $('.subM01').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM02').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })
    $('.subM03').css({
      fontWeight: '300',
      borderBottom: '2px solid #445D5D00'
    })

    $('.cot').css({display: 'none'})
    $('.flo').css({display: 'none'})
    $('.fru').css({display: 'none'})
    $('.cit').css({display: 'block'})
  })

  // 탑버튼
  $(window).scroll(function(){
    let scrollT = $(window).scrollTop();

    if(scrollT > 300){
      $('.topbtn').css({display:'block'})
    } else {
      $('.topbtn').css({display:'none'})
    }
  })
  
  $('.tbtn').click(function(){
    $('html').animate({scrollTop:0})
  })

  ////////
})