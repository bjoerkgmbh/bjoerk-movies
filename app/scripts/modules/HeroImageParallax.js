import $ from 'jquery';

class HeroImageParallax {
  constructor() {
    this.parallaxEffect();
  }

  parallaxEffect() {

    var tooSmall = false;
    var controller = null;
    var maxWidth = 1200;

    if ($(window).width() < maxWidth) {
      tooSmall = true;
    }

    function initScrollMagic() {
      $('body').scrollTop(0);
      controller = new ScrollMagic.Controller();
      var parallaxTweenLineLite = new TimelineMax();
      
      parallaxTweenLineLite.from('.hero-image__foreground__inner', 1, {opacity:0});
      
      parallaxTweenLineLite.from('.hero-image__foreground__inner--star', 1, {
          autoAlpha: 0,
          x: -500,
          width: 2000,
          rotation: 360
      });
      parallaxTweenLineLite.from('#first_gunshot', .1, {opacity:0, delay:.1});
      parallaxTweenLineLite.from('#second_gunshot', .1, {opacity:0, delay:.2});
      parallaxTweenLineLite.from('#third_gunshot', .1, {opacity:0, delay:.3});
      parallaxTweenLineLite.from('#fourth_gunshot', .1, {opacity:0, delay:.4});
      parallaxTweenLineLite.from('#fifth_gunshot', .1, {opacity:0, delay:.5});

      var parallaxScene = new ScrollMagic.Scene({
          triggerElement: '.hero-image',
          duration: '100%',
          triggerHook: .3
        })
        .setTween(parallaxTweenLineLite)
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

export default HeroImageParallax;
