var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.videos = new Videos();
    // console.log(window.exampleVideoData);
    this.exampleVideoData = new Videos(window.exampleVideoData); 
    // console.log(this.exampleVideoData);   
    this.videoPlayer = new VideoPlayerView();
    
    this.videoList = new VideoListView({collection: this.exampleVideoData});
    this.videoListEntry = new VideoListEntryView(this.videoList);

    
    this.render();
  },
  


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});


