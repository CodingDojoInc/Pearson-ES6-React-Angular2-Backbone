var Book1_Model = Backbone.Model.extend({
  url: 'http://localhost:3000/books/1',
  defaults: {
    title: null,
    author: null
  }
});

var book1 = new Book1_Model();
book1.fetch().then(function(){
  var book1_tr = "<tr id='"+book1.id+"'>";
  book1_tr += "<td>"+book1.id+"</td>";
  book1_tr += "<td>"+book1.get('title')+"</td>";
  book1_tr += "<td>"+book1.get('author')+"</td>";
  book1_tr += "</tr>";
  $('tbody').html(book1_tr);
});
