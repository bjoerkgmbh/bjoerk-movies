import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';

class Videos {
  constructor() {
    this.videosHover();
  }

  videosHover() {
    jQueryBridget('flickity', Flickity, $);
    var $carousel = $('.main-carousel').flickity({
      'initialIndex': 2,
      'contain': true,
      'wrapAround': true,
      'cellAlign': 'left',
      'autoPlay': 3000,
      'draggable': false
    });

    $carousel.on('select.flickity', function () {
      $(this).find('.flickity-slider .carousel-cell').each(function () {
        if ($(this).hasClass('is-selected')) {
          $(this).css('pointer-events', 'auto');
          $(this).find('.video-element').attr('controls', true);
        } else {
          $(this).css('pointer-events', 'none');
          $(this).find('.video-element').removeAttr('controls');
        }
      });
    });
  }
}

export default Videos;
