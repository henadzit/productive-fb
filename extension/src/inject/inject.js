chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      initImages();
      windowHandler();
      hideSideNavLinks();
      hideChatLinks();
      malikovChair();
      removeAdditionalColumns();
      removePostItems();
    }
  }, 10);
});
