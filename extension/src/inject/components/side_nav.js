function hideSideNavLinks() {
  setInterval(function() {
    var links = jQuery(".sideNavItem");
    var link = links[getRandomInt(links.length - 1)];

    if (typeof link !== "undefined") {
      link.className += " sideNavItem__action";
    }
  }, 40000);
}
