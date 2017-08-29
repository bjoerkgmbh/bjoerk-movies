import $ from 'jquery';

class FadeInSections {
  constructor() {
    this.fadeInSection();
  }

  fadeInSection() {

    var tooSmall = false;
    var controller = null;
    var maxWidth = 1200;

    if ($(window).width() < maxWidth) {
      tooSmall = true;
    }

    function initScrollMagic() {
      $('body').scrollTop(0);
      controller = new ScrollMagic.Controller();

      var tweenLine = new TimelineMax();
      tweenLine.from('.description__content', 0.3, {
        opacity: 0,
        delay: 0.5
      });
      new ScrollMagic.Scene({
          triggerElement: '.description',
          triggerHook: 0.9
        })
        .setTween(tweenLine)
        .addTo(controller);


      var tweenLine2 = new TimelineMax();
      tweenLine2
        .staggerFrom('.team .cards > div', 0.9, {
          opacity: 0,
          x: 100,
        }, 0.9)
        .from('.team .contact > div', 0.9, {
          autoAlpha: 0,
          y: 10
        });

      new ScrollMagic.Scene({
          triggerElement: '.team',
          duration: '50%',
          triggerHook: 0.5
        })
        .setTween(tweenLine2)
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

export default FadeInSections;
