import $ from 'jquery';

class Clapboard {
  constructor() {
    this.toggleClasses();
  }
  
  toggleClasses() {

    var tooSmall = false;
    var controller = null;
    var maxWidth = 1200;

    if ($(window).width() < maxWidth) {
      tooSmall = true;
    }

    function initScrollMagic() {
      $('body').scrollTop(0);
      controller = new ScrollMagic.Controller();
      var tweenLine = new TimelineLite();
      tweenLine
        .from('.clapboard__inner__top', 0.1, {
          rotationZ: -18,
          transformOrigin: 'bottom left',
          ease: Power0.easeOut
        })
        .to('.clapboard__inner__top', 0.1, {
          rotationZ: 0,
          transformOrigin: 'bottom left',
          ease: Power0.easeOut
        })
        .from('.clapboard__inner__title', 1, {
          opacity: 0
        })
        .staggerFrom('.clapboard__inner__sections div', 0.5, {
          opacity: 0,
          x: 100,
        }, 0.2);

      var clapScene = new ScrollMagic.Scene({
          triggerElement: '.clapboard',
          duration: '80%',
          triggerHook: 0.8
        })
        .setTween(tweenLine)
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

export default Clapboard;
