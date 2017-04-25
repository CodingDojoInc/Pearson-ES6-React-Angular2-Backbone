var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    $('#model').html(JSON.stringify(this));
    this.printAuthor();
  },
  printAuthor: function(){
    $('#author').html(JSON.stringify(this.get('author')));
  }
});

var myBook = new BookModel();
