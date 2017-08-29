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
      'contain': true,
      'initialIndex': 2,
      'cellAlign': 'center',
      'autoPlay': 3000,
      'draggable': false
    });

    var flkty = $carousel.data('flickity');

    $('.flickity-prev-next-button').on('click', function () {
      $('#carousel').find('.flickity-slider .carousel-cell').each(function () {
        $(this).find('.video-element video').get(0).pause();
      });
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
