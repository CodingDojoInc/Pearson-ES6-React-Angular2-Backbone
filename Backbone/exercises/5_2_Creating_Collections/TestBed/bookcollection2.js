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
    this.listenTo(this, 'sync', this.findFirst),
    this.listenTo(this, 'sync', this.printBooks)
  },
  findFirst: function(){
    var book1 = this.get(1);
    alert(book1.attributes.title +" by "+book1.attributes.author);
  },
  printBooks: function(){
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
listOfBooks.fetch();
