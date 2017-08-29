import $ from 'jquery';

class Smoke {
  constructor() {
    // this.createNewElements();
    // this.bulletsTrigger();
  }

  createNewElements() {
    for (var i = 0; i < 2; i++) {
      $('#blunt_container .smoke-group').append('<div></div>');
    }
    for (var i = 0; i < 5; i++) {
      $('#blunt_container_2 .smoke-group').append('<div></div>');
    }
    for (var i = 0; i < 4; i++) {
      $('#blunt_container_3 .smoke-group').append('<div></div>');
    }
    for (var i = 0; i < 3; i++) {
      $('#blunt_container_4 .smoke-group').append('<div></div>');
    }
    for (var i = 0; i < 20; i++) {
      $('#blunt_container_5 .smoke-group').append('<div></div>');
    }
  }

  bulletsTrigger() {
    var firstShotTrigger = setInterval(function() {
      var first_gunshot = $('#first_gunshot').css('opacity');
      if (first_gunshot === '1') {
        clearInterval(firstShotTrigger);
        $('#first_gunshot').addClass('showBullet');
        setTimeout(function() {
          $('#blunt_container .smoke-group').children('div').each(function() {
            $(this).addClass('smoke');
          });
        }, 500);
      }
    }, 1000);

    var secondShotTrigger = setInterval(function() {
      var second_gunshot = $('#second_gunshot').css('opacity');
      if (second_gunshot === '1') {
        clearInterval(secondShotTrigger);
        $('#second_gunshot').addClass('showBullet');
        setTimeout(function() {
          $('#blunt_container_2 .smoke-group').children('div').each(function() {
            $(this).addClass('smoke');
          });
        }, 1000);
      }
    }, 1000);

    var thirdShotTrigger = setInterval(function() {
      var third_gunshot = $('#third_gunshot').css('opacity');
      if (third_gunshot === '1') {
        clearInterval(thirdShotTrigger);
        $('#third_gunshot').addClass('showBullet');
        setTimeout(function() {
          $('#blunt_container_3 .smoke-group').children('div').each(function() {
            $(this).addClass('smoke');
          });
        }, 1500);
      }
    }, 1000);

    var fourthShotTrigger = setInterval(function() {
      var fourth_gunshot = $('#fourth_gunshot').css('opacity');
      if (fourth_gunshot === '1') {
        clearInterval(fourthShotTrigger);
        $('#fourth_gunshot').addClass('showBullet');
        setTimeout(function() {
          $('#blunt_container_4 .smoke-group').children('div').each(function() {
            $(this).addClass('smoke');
          });
        }, 2000);
      }
    }, 1000);

    var fifthShotTrigger = setInterval(function() {
      var fifth_gunshot = $('#fifth_gunshot').css('opacity');
      if (fifth_gunshot === '1') {
        clearInterval(fifthShotTrigger);
        $('#fifth_gunshot').addClass('showBullet');
        setTimeout(function() {
          $('#blunt_container_5 .smoke-group').children('div').each(function() {
            $(this).addClass('smoke');
          });
        }, 2500);
      }
    }, 1000);
  }
}

export default Smoke;
