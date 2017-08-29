import $ from 'jquery';

class Cover {
  constructor() {
    this.animateCover();
    this.displayCover();
  }

  displayCover() {
    if ($(window).width() < 576) {
      $('.cover').find('video').attr('poster', 'images/bjoerk_telefoniert.jpg');
    }
  }

  animateCover() {
    var tooSmall = false;
    var controller = null;
    var maxWidth = 1200;

    if ($(window).width() < maxWidth) {
      tooSmall = true;
    }

    function initScrollMagic() {
      $('body').scrollTop(0);
      controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
          triggerElement: '.cover',
          offset: $(window).width() / 6,
          triggerHook: 0
        })
        .setPin('.cover')
        .addTo(controller);
      $('.cover__media').get(0).play();

      var coverTweenLine = new TimelineMax();
      coverTweenLine
        .add('satrtLogo')
        .to('.cover__container__content', 0.5, {
          opacity: 0,
          x: -500
        })
        .add('endLogo')
        .to('.cover__container__arrow', 0.9, {
          opacity: 0,
          y: 200
        }, 'endLogo')
      var coverScene = new ScrollMagic.Scene({
          triggerElement: '.cover',
          duration: '100%',
          triggerHook: 0
        })
        .setTween(coverTweenLine)
        .addTo(controller);
    }

    if (!tooSmall) {
      initScrollMagic();
    }

    $(window).resize(function () {
      var wWidth = $(window).width();
      if (wWidth < maxWidth) {
        if (controller !== null && controller !== undefined) {
          controller = controller.destroy(true);
          location.reload(true);
        }
      } else if (wWidth >= maxWidth) {
        if (controller === null || controller === undefined) {
          initScrollMagic();
        }
      }
    });
  }
}

export default Cover;
