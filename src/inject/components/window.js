function windowHandler() {
  var zuckEl = jQuery('body').append('<div class="profb-zuck"></div>')
  setInterval(function() {
    var leftPos = Math.floor(Math.random() * 80) + 10 + "%"
    jQuery('.profb-zuck').css({ left: leftPos })
  }, 50000)
}
