function hideSideNavLinks() {
  setTimeout(function() {
    startAction();
  }, 40000);
}

function startAction() {
  setInterval(function() {
    var links = jQuery(".sideNavItem");
    var link = links[getRandomInt(links.length - 1)];

    if (typeof link !== "undefined") {
      link.className += " sideNavItem__action";
    }
  }, 5000);
}
