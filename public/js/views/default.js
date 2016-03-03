define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PagesCollection, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main'),
    collection: {},

    initialize: function() {
      this.collection = new PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch();
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      console.log( this.data );
      var compiledTemplate = Mustache.render( pageTemplate, this );
      this.$el.html( compiledTemplate );
    }
  });
  return DefaultView;
});
