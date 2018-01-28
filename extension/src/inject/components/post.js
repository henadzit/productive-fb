function removePostItems() {
  setTimeout(function() {
    startRemoving();
  }, 1000);
}

function startRemoving() {
  setInterval(function() {
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
}
