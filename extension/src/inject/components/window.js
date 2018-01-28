function windowHandler() {
  var zuckLeftClass = "profb-zuck-left";
  var zuckBottomClass = "profb-zuck-bottom"
  jQuery('body').append('<div class="' + zuckLeftClass + '"></div>')
  jQuery('body').append('<div class="' + zuckBottomClass + '"></div>')

  setInterval(function() {
    var dynPos = Math.floor(Math.random() * 80) + 10 + "%"
    jQuery('.' + zuckLeftClass).css({ top: dynPos })
    jQuery('.' + zuckBottomClass).css({ left: dynPos })
  }, 30000)
}
