var Book_Model = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  }
});

var Book_Collection = Backbone.Collection.extend({
  model: Book_Model,
  url: 'http://localhost:3000/books'
});

listOfBooks = new Book_Collection();
listOfBooks.fetch().then(function(){
  console.log(listOfBooks);
});
