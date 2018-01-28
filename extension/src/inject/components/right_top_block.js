function removeAdditionalColumns() {
  removing = new RemoveAdditionalColumns();
  removing.start();
}

class RemoveAdditionalColumns {
  constructor() {
    this.startRightColumnAt = 45000;
    this.startRightFooterAt = 50000;
    this.startTopBlockAt = 55000;
  }

  start() {
    var that = this;

    setTimeout(function() {
      that.removeItem(".home_right_column");
    }, this.startRightColumnAt);

    setTimeout(function() {
      that.removeItem("#pagelet_rhc_footer");
    }, this.startRightFooterAt);

    setTimeout(function() {
      that.removeItem("#pagelet_composer");
    }, this.startTopBlockAt);
  }

  removeItem(klass) {
    var content = jQuery(klass);
    if (content.length > 0) {
      content.hide("slow", function() {
        content.remove();
      });
    }
  }
}
