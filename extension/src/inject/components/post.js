function removePostItems() {
  setTimeout(function() {
    startRemoving();
  }, 60000);
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
  }, 1500);

  setTimeout(function() {
    clearInterval(interval);
  }, 115000);
}
