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
    $('tbody').append(this.$el);
    return this;
  }
})

var book1 = new Book_Model({author: "Homer", title: "The Odyssey"})
var bkView = new Book_View({model: book1});
