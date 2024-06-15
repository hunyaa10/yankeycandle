$(function(){
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

  // sec01 스크롤 효과
  let h = $('.sec01').offset().top;

  $(window).scroll(function(){
    let scrollT = $(window).scrollTop();

    if(scrollT > h/2){
      $('.src').addClass('active')
    }

    scrollT = h;

  })

  // sec01 더보기
  $('.src04').on({
    mouseover: function(){
      $('.Tscale').css({scale:'1.03'})
    },
    mouseout: function(){
      $('.Tscale').css({scale:'1'})
    }
  })

  // sec02 슬릭 좌우슬라이드
  $('.slide').slick({
    rows: 1,
    dots: true
  });

  // sec03 퍼퓸메뉴 선택
  $('.t1').click(function(){
    $('.t1').css({
      borderBottom: '2px solid #445D5D',
      fontWeight: '500'
    })
    $('.t2').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t3').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t4').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })

    $('.cc01').css({display: 'flex'})
    $('.cc02').css({display: 'none'})
    $('.cc03').css({display: 'none'})
    $('.cc04').css({display: 'none'})
  })
  $('.t2').click(function(){
    $('.t1').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t2').css({
      borderBottom: '2px solid #445D5D',
      fontWeight: '500'
    })
    $('.t3').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t4').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })

    $('.cc01').css({display: 'none'})
    $('.cc02').css({display: 'flex'})
    $('.cc03').css({display: 'none'})
    $('.cc04').css({display: 'none'})
  })
  $('.t3').click(function(){
    $('.t1').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t2').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t3').css({
      borderBottom: '2px solid #445D5D',
      fontWeight: '500'
    })
    $('.t4').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })

    $('.cc01').css({display: 'none'})
    $('.cc02').css({display: 'none'})
    $('.cc03').css({display: 'flex'})
    $('.cc04').css({display: 'none'})
  })
  $('.t4').click(function(){
    $('.t1').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t2').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t3').css({
      borderBottom: '2px solid #445D5D00',
      fontWeight: '300'
    })
    $('.t4').css({
      borderBottom: '2px solid #445D5D',
      fontWeight: '500'
    })

    $('.cc01').css({display: 'none'})
    $('.cc02').css({display: 'none'})
    $('.cc03').css({display: 'none'})
    $('.cc04').css({display: 'flex'})
  })

  // sec03 퍼퓸이미지 마우스오버
  $('.per01').on({
    mouseover: function(){
      $('.per_a01').stop().css({zIndex: '1'})
    },
    mouseout: function(){
      $('.per_a01').stop().css({zIndex: '-1'})
    }
  })
  $('.per02').on({
    mouseover: function(){
      $('.per_a02').stop().css({zIndex: '1'})
    },
    mouseout: function(){
      $('.per_a02').stop().css({zIndex: '-1'})
    }
  })
  $('.per03').on({
    mouseover: function(){
      $('.per_a03').stop().css({zIndex: '1'})
    },
    mouseout: function(){
      $('.per_a03').stop().css({zIndex: '-1'})
    }
  })
  $('.per04').on({
    mouseover: function(){
      $('.per_a04').stop().css({zIndex: '1'})
    },
    mouseout: function(){
      $('.per_a04').stop().css({zIndex: '-1'})
    }
  })
  $('.per05').on({
    mouseover: function(){
      $('.per_a05').stop().css({zIndex: '1'})
    },
    mouseout: function(){
      $('.per_a05').stop().css({zIndex: '-1'})
    }
  })


  // sec03 이미지 자동 슬라이드
  $(document).ready(function(){
    let tw = $('.perimg').outerWidth();
    let w = tw/4;

    $('.p11').last().prependTo('.per11')
    $('.per11').css('left', -w)
    setInterval(function(){
      $('.per11').animate({
        left: '-=' + w
      },'slow',function(){
        $('.p11').first().appendTo('.per11')
        $('.per11').css('left', -w)
      })
    },2000)

    $('.p22').last().prependTo('.per22')
    $('.per22').css('left', -w)
    setInterval(function(){
      $('.per22').animate({
        left: '-=' + w
      },'slow',function(){
        $('.p22').first().appendTo('.per22')
        $('.per22').css('left', -w)
      })
    },2000)

    $('.p33').last().prependTo('.per33')
    $('.per33').css('left', -w)
    setInterval(function(){
      $('.per33').animate({
        left: '-=' + w
      },'slow',function(){
        $('.p33').first().appendTo('.per33')
        $('.per33').css('left', -w)
      })
    },2000)

    $('.p44').last().prependTo('.per44')
    $('.per44').css('left', -w)
    setInterval(function(){
      $('.per44').animate({
        left: '-=' + w
      },'slow',function(){
        $('.p44').first().appendTo('.per44')
        $('.per44').css('left', -w)
      })
    },2000)
  })

  // sec05 마크클릭
  $('.m01').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg01.jpg',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '1'})
    $('.m02').css({opacity: '0.7'})
    $('.m03').css({opacity: '0.7'})
    $('.m04').css({opacity: '0.7'})
    $('.m05').css({opacity: '0.7'})
    $('.m06').css({opacity: '0.7'})

    $('.t01').css({display: 'block'})
    $('.t02').css({display: 'none'})
    $('.t03').css({display: 'none'})
    $('.t04').css({display: 'none'})
    $('.t05').css({display: 'none'})
    $('.t06').css({display: 'none'})
  })
  $('.m02').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg02.jpg',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '0.7'})
    $('.m02').css({opacity: '1'})
    $('.m03').css({opacity: '0.7'})
    $('.m04').css({opacity: '0.7'})
    $('.m05').css({opacity: '0.7'})
    $('.m06').css({opacity: '0.7'})

    $('.t01').css({display: 'none'})
    $('.t02').css({display: 'block'})
    $('.t03').css({display: 'none'})
    $('.t04').css({display: 'none'})
    $('.t05').css({display: 'none'})
    $('.t06').css({display: 'none'})
  })
  $('.m03').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg03.jpg',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '0.7'})
    $('.m02').css({opacity: '0.7'})
    $('.m03').css({opacity: '1'})
    $('.m04').css({opacity: '0.7'})
    $('.m05').css({opacity: '0.7'})
    $('.m06').css({opacity: '0.7'})

    $('.t01').css({display: 'none'})
    $('.t02').css({display: 'none'})
    $('.t03').css({display: 'block'})
    $('.t04').css({display: 'none'})
    $('.t05').css({display: 'none'})
    $('.t06').css({display: 'none'})
  })
  $('.m04').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg04.jpg',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '0.7'})
    $('.m02').css({opacity: '0.7'})
    $('.m03').css({opacity: '0.7'})
    $('.m04').css({opacity: '1'})
    $('.m05').css({opacity: '0.7'})
    $('.m06').css({opacity: '0.7'})

    $('.t01').css({display: 'none'})
    $('.t02').css({display: 'none'})
    $('.t03').css({display: 'none'})
    $('.t04').css({display: 'block'})
    $('.t05').css({display: 'none'})
    $('.t06').css({display: 'none'})
  })
  $('.m05').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg05.jpg',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '0.7'})
    $('.m02').css({opacity: '0.7'})
    $('.m03').css({opacity: '0.7'})
    $('.m04').css({opacity: '0.7'})
    $('.m05').css({opacity: '1'})
    $('.m06').css({opacity: '0.7'})

    $('.t01').css({display: 'none'})
    $('.t02').css({display: 'none'})
    $('.t03').css({display: 'none'})
    $('.t04').css({display: 'none'})
    $('.t05').css({display: 'block'})
    $('.t06').css({display: 'none'})
  })
  $('.m06').click(function(){
    $('.sec05').css({
      background: 'url(./img/sec05_가치관/특징_bg06.jpg',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })

    $('.m01').css({opacity: '0.7'})
    $('.m02').css({opacity: '0.7'})
    $('.m03').css({opacity: '0.7'})
    $('.m04').css({opacity: '0.7'})
    $('.m05').css({opacity: '0.7'})
    $('.m06').css({opacity: '1'})

    $('.t01').css({display: 'none'})
    $('.t02').css({display: 'none'})
    $('.t03').css({display: 'none'})
    $('.t04').css({display: 'none'})
    $('.t05').css({display: 'none'})
    $('.t06').css({display: 'block'})
  })

  // 탑버튼
  $(window).scroll(function(){
    let scrollT = $(window).scrollTop();

    if(scrollT > 1000){
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