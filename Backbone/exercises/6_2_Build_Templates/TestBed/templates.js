var Book_Model = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  }
});

var bookTemplate = _.template(
  "<tr><td><%= title %></td><td><%= author %></td></tr>"
);

var book1 = new Book_Model({title: "The Odyssey", author: "Homer"});
$('tbody').append(bookTemplate(book1.toJSON()));
