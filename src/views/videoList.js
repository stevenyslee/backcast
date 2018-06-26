var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // new VideoListEntryView;
    // var wasItRun = false;
    // if (wasItRun === false) {
    this.collection.on('sync', this.render, this);
    // }
    // wasItRun = true;
  },

  render: function() {
    
    this.collection.models.forEach(function(video) {
      var videoListEntry = new VideoListEntryView(video);
      return videoListEntry.render();
    });
        
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },
  
  // renderVideo: function(video) {
  //   var videoListEntry = new VideoListEntryView({model: video});
  //   this.$el.append(videoListEntryView.render());
  // }

  template: templateURL('src/templates/videoList.html')

});


