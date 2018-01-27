function initImages() {
  var malikov = new Malikov
  malikov.start();
}


class Malikov {
  constructor() {
    this.isRun = false;
    this.startAt = 4000;
    this.musicStartAt = 23800;

    $('body').append("<audio id=\"malikovAudio\" preload loop><source src=\"https://s3.amazonaws.com/henadzit-public/malikov.mp3\"></audio>")
  }

  start() {
    var self = this;
    setTimeout(function () { self.run(); }, this.startAt);
  }

  run() {
    $("#malikovAudio")[0].play();

    setTimeout(function() {
      $("body").addClass("malikov");
    }, this.musicStartAt);
  }
}
