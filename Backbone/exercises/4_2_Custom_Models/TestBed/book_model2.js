var Book1_Model = Backbone.Model.extend({
  url: 'http://localhost:3000/books/1',
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    this.listenTo(this, 'change', this.logChange);
  },
  printAuthor: function(){
    $('#author').html(JSON.stringify(this.get('author')));
  },
  printTitle: function(){
    $('#title').html(JSON.stringify(this.get('title')));
  },
  logChange: function(){
    console.log('Noticed a change');
  }
});

var book1 = new Book1_Model();
book1.fetch().then(function(){
  book1.printAuthor();
  book1.printTitle();
  book1.set('author', 'Bart');
  console.log(book1);
});
