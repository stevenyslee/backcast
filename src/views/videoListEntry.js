var VideoListEntryView = Backbone.View.extend({


  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    // console.log(this.attributes.snippet);
    this.$el.html(this.template(this.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
