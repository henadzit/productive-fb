function hideChatLinks() {
  setTimeout(function() {
    startChatAction();
  }, 50000);
}

function startChatAction() {
  setInterval(function() {
    var links = jQuery(".fbChatOrderedList li");
    var link = links[getRandomInt(links.length - 1)];

    if (typeof link !== "undefined") {
      link.className += " action";
    }
  }, 3000);
}
