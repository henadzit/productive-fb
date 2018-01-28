function initImages() {
  var malikov = new Malikov
  malikov.start();
}


class Malikov {
  constructor() {
    this.isRun = false;
    this.startAt = 4000;
    this.rotateImagesAt = 23800;
    this.flashLightsAt = 84000;

    $('body').append("<audio id=\"malikovAudio\" preload loop><source src=\"https://s3.amazonaws.com/henadzit-public/malikov.mp3\"></audio>")
  }

  start() {
    var self = this;
    setTimeout(function () { self.run(); }, this.startAt);
  }

  run() {
    $("body").addClass("malikov-1");
    $("#malikovAudio")[0].play();

    setTimeout(function() {
      $("body").addClass("malikov-2");
    }, this.rotateImagesAt);

    setTimeout(function() {
      $("body").addClass("malikov-3");
    }, this.flashLightsAt);
  }
}
