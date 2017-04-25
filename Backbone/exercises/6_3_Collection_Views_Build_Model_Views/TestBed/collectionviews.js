var Book_Model = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  }
});

var Book_View = Backbone.View.extend({
  tagName: 'tr',
  template: _.template(
    "<td><%= title %></td><td><%= author %></td>"
  ),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

var Book_Collection = Backbone.Collection.extend({
  model: Book_Model,
  url: 'http://localhost:3000/books'
})

var Book_Collection_View = Backbone.View.extend({
  el: 'tbody',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render)
  },
  render: function(){
    this.$el.empty();
    this.collection.each(function(book){
      var bookView = new Book_View({model: book});
      this.$el.append(bookView.render().$el)
    }, this);
  }
});

var bookList = new Book_Collection();
var bookListView = new Book_Collection_View({collection: bookList});
bookList.fetch();
