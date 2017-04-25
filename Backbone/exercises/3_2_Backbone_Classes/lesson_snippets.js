var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    console.log("I'm alive!");
  }
});

var BookCollection = Backbone.Collection.extend({
  model: BookModel,
  url: "/books",
  initialize: function(){
		this.listenTo(this, 'change', this.logTheChange);
  }
  logTheChange: function(){
    console.log('Noticed a change in a book model');
  }
});

var BookView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#book_template').html()),
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('#book_info').append(this.$el);
    return this;
  },
  events: {
    'click' : 'doSomething'
  },
  doSomething: function(){
    console.log('Click in the view!')
  }
});
