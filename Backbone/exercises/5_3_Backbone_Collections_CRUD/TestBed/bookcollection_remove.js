var Book_Model = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  }
});

var Book_Collection = Backbone.Collection.extend({
  model: Book_Model,
  url: 'http://localhost:3000/books',
  initialize: function(){
    this.listenTo(this, 'sync remove', this.printBooks)
  },
  printBooks: function(){
    $('tbody').html("");
    _.each(this.models, function(book){
      var book_tr = "<tr id='"+book.id+"'>";
      book_tr += "<td>"+book.id+"</td>";
      book_tr += "<td>"+book.get('title')+"</td>";
      book_tr += "<td>"+book.get('author')+"</td>";
      book_tr += "</tr>";
      $('tbody').append(book_tr);
    });
  }
});

listOfBooks = new Book_Collection();
listOfBooks.fetch().then(function(){
  listOfBooks.get(1).destroy();
});
