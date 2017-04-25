var Book1_Model = Backbone.Model.extend({
  url: 'http://localhost:3000/books/1',
  defaults: {
    title: null,
    author: null
  }
});
