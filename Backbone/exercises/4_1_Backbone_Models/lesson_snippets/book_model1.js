var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    console.log("I'm alive!");
  }
});

var myBook = new BookModel();
console.log(myBook);
