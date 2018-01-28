function initImages() {
  var malikov = new Malikov
  malikov.start();
}


function malikovChair() {
  jQuery('body').append('<div class="malikov-chair"></div>');
}


class Malikov {
  constructor() {
    this.isRun = false;
    this.startAt = 4000;
    this.rotateImagesAt = 23800;
    this.flashLightsAt = 84000;
    this.destroyAt = 116000;

    $('body').append("<audio id=\"malikovAudio\" preload loop><source src=\"https://s3.amazonaws.com/henadzit-public/malikov.mp3\"></audio>");

    $('body').append("<div id=\"overlay\"></div>");
  }

  start() {
    var self = this;
    setTimeout(function () { self.run(); }, this.startAt);
  }

  run() {
    $("html").addClass("malikov-1");
    $("#malikovAudio")[0].play();

    setTimeout(function() {
      $("html").addClass("malikov-2");
    }, this.rotateImagesAt);

    setTimeout(function() {
      $("html").addClass("malikov-3");
    }, this.flashLightsAt);

    setTimeout(function() {
      $("html").addClass("malikov-4");
    }, this.destroyAt);
  }
}
