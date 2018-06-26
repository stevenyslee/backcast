var VideoListView = Backbone.View.extend({
  initialize: function() {
  this.collection.forEach(this.render(), this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
    // this.collection.forEach(this.renderVideo, this);
  },
  
  // renderVideo: function(video) {
  //   var videoListEntry = new VideoListEntryView({model: video});
  //   this.$el.append(videoListEntryView.render());
  // }

  template: templateURL('src/templates/videoList.html')

});
