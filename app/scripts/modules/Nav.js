import $ from 'jquery';

class Nav {
  constructor() {
    this.menuOnClick();
    this.menuOnHover();
    this.menuOnClickMobile();
  }
  menuOnClick() {
    $('.nav-link').click(function (e) {
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
      e.preventDefault();
    });
  }

  menuOnHover() {
    var that = this;
    $('#nav ul li').hover(function () {
      $(this).toggleClass('focus-nav-item');
      $(this).find('a').toggleClass('focus-nav-item-link');
      $(this).find('i').toggleClass('focus-nav-item-icon');
    });
  }
  menuOnClickMobile() {
    $('#nav .hamburger-menu').on('touchstart click', function () {
      $(this).toggleClass('open');
      $(this).next().find('ul').toggleClass('open');
      $(this).next().find('.social').toggleClass('open');
      $(this).next().find('.infos').toggleClass('open');
    });
    $('#nav ul li').on('touchstart click', function () {
      $(this).parent().removeClass('open');
      $(this).parent().parent().prev().removeClass('open');
      $(this).parent().next().removeClass('open');
      $(this).parent().next().next().removeClass('open');
    });
    $('#nav ul li a').on('touchstart click', function(e){       
      e.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 'slow');
    });
  }
}

export default Nav;
