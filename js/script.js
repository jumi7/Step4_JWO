// slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive:[
    {
        breakpoint: 1024,
        settings:{
            slidesToShow:3,
        }
    },
    {
        breakpoint: 768,
        settings:{
            slidesToShow:2,
        }
    },
    {
        breakpoint: 480,
        settings:{
            slidesToShow:1,
        }
    },
]
});

// burger
  // $('.burger_btn').on('click',function(){//.btn_triggerをクリックすると
  //   $('.burger_btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  //   $('.header__nav_wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
  //   $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
  //  });

  
  //   // if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
  //     $('.header__nav_li>a').on('click',function(){//.nav-item>aをクリックすると
  //       if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
  //       $('.header__nav_wrapper').fadeOut(500);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
  //       $('.burger_btn').removeClass('close');//.btn_triggerのcloseクラスを削除
  //       $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
  //     }
  //     });
  //   // }

  $(function(){
    $('.burger_btn').on('click', function(){
      $('.header__nav_ul').toggleClass('.is-active');
    });
  }());