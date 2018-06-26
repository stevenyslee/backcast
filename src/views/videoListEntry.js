var VideoListEntryView = Backbone.View.extend({


  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    this.$el.html(this.template(this.collection.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
