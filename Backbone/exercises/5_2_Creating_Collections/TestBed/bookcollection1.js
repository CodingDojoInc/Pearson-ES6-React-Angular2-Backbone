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
  _.each(listOfBooks.models, function(book){
    var book_tr = "<tr id='"+book.id+"'>";
    book_tr += "<td>"+book.id+"</td>";
    book_tr += "<td>"+book.attributes.title+"</td>";
    book_tr += "<td>"+book.attributes.author+"</td>";
    book_tr += "</tr>";
    $('tbody').append(book_tr);
  })
});
