chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);


      windowHandler();
      //// PUT YOUR CODE HERE
    }
  }, 10);
});
