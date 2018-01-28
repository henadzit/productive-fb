function removePostItems() {
  setTimeout(function() {
    startRemoving();
  }, 10000);
}

function startRemoving() {
  var interval = setInterval(function() {
    var content = jQuery(".userContentWrapper:first");
    if (content.length > 0) {
      content
        .parent()
        .parent()
        .hide("slow", function() {
          content.remove();
        });
    }
  }, 1000);

  setTimeout(function() {
    clearInterval(interval);
  }, 115000);
}
