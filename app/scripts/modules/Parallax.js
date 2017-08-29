import $ from 'jquery';

class Parallax {
  constructor() {
    this.setParallaxEffect();
  }

  setParallaxEffect() {
    (function () {
      // auszufuehrender Code, nachdem DOM geladen wurden
      function getWidth() {
        var de = document.documentElement;
        var myWidth = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
        return myWidth;
      }
      document.getWidth = getWidth;

      function getHeight() {
        var de = document.documentElement;
        var myHeight = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
        return myHeight;
      }
      document.getHeight = getHeight;

      // Temporary variables to hold mouse x-y pos.s
      var tempX = (document.getWidth / 2);
      var tempY = (document.getHeight / 2);

      // Set-up to use getMouseXY function onMouseMove 
      document.onmousemove = getMouseXY;
      document.onscroll = moveDiv;

      // Main function to retrieve mouse x-y pos.s
      function getMouseXY(e) {

        if (e.pageX || e.pageY) {
          tempX = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
          tempY = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;
        } else if (e.clientX || e.clientY) {
          tempX = e.clientX;
          tempY = e.clientY;
        }
        // catch possible negative values in NS4
        if (tempX < 0) {
          tempX = 0
        }
        if (tempY < 0) {
          tempY = 0
        }

        moveDiv();
        return true;
      }

      function moveDiv() {
        var $window = $(window);
        var scrollPos = $(window).scrollTop();
        var windowHeight = $window.height();
        var windowWidth = $window.width();
        var paRahmenPos = $('#parallax-beschnitt').offset().top;
        var paRahmenHeight = $('#parallax-beschnitt').height();

        if (((scrollPos + windowHeight) > paRahmenPos) && (scrollPos < (paRahmenPos + paRahmenHeight))) {
          $('#parallax-rahmen').removeClass('versteckt');

          var scaleFactor = 2 * ((scrollPos - windowHeight - paRahmenPos + paRahmenHeight) / (paRahmenHeight + windowHeight));

          var tempX2 = (20 - (tempX / windowWidth * 40));
          var tempY2 = (20 - (tempY / windowHeight * 40));
          var tempTranslate = ('translate(' + (tempX2 * scaleFactor * 0.2 - 50) + '%, ' + (tempY2 * scaleFactor * 0.2 - 50) + '%) scale(' + (0.2 * scaleFactor + 1) + ')');
          $('img#parallax1').css({
            '-webkit-transform': tempTranslate,
            '-moz-transform': tempTranslate,
            '-ms-transform': tempTranslate,
            '-o-transform': tempTranslate,
            'transform': tempTranslate,
          });
          tempTranslate = ('translate(' + (tempX2 * scaleFactor * 0.4 - 50) + '%, ' + (tempY2 * scaleFactor * 0.4 - 50) + '%) scale(' + (0.4 * scaleFactor + 1) + ')');
          $('img#parallax2').css({
            '-webkit-transform': tempTranslate,
            '-moz-transform': tempTranslate,
            '-ms-transform': tempTranslate,
            '-o-transform': tempTranslate,
            'transform': tempTranslate,
          });
          tempTranslate = ('translate(' + (tempX2 * scaleFactor * 0.6 - 50) + '%, ' + (tempY2 * scaleFactor * 0.6 - 50) + '%) scale(' + (0.6 * scaleFactor + 1) + ')');
          $('img#parallax3').css({
            '-webkit-transform': tempTranslate,
            '-moz-transform': tempTranslate,
            '-ms-transform': tempTranslate,
            '-o-transform': tempTranslate,
            'transform': tempTranslate,
          });
          tempTranslate = ('translate(' + (tempX2 * scaleFactor * 0.8 - 50) + '%, ' + (tempY2 * scaleFactor * 0.8 - 50) + '%) scale(' + (0.8 * scaleFactor + 1) + ')');
          $('img#parallax4').css({
            '-webkit-transform': tempTranslate,
            '-moz-transform': tempTranslate,
            '-ms-transform': tempTranslate,
            '-o-transform': tempTranslate,
            'transform': tempTranslate,
          });
        } else {
          $('#parallax-rahmen').addClass('versteckt');
        };
      }
    })();
  }
}
export default Parallax;