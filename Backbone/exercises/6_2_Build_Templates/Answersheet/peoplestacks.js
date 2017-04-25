var PersonModel = Backbone.Model.extend({
  defaults:{
    name: null
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<h1><%= name %></h1>"),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('.people').append(this.$el);
  },
  initialize: function(){
  	this.render();
  }
});

var barry = new PersonModel({name: "Barry"});
var larry = new PersonModel({name: "Larry"});
var harry = new PersonModel({name: "Harry"});
var terry = new PersonModel({name: "Terry"});
var jerry = new PersonModel({name: "Jerry"});

var barryView = new PersonView({model: barry});
var larryView = new PersonView({model: larry});
var harryView = new PersonView({model: harry});
var terryView = new PersonView({model: terry});
var jerryView = new PersonView({model: jerry});

var StackModel = Backbone.Model.extend({
  defaults:{
    name: null
  }
});

var StackView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<h2><%= language %></h2>"),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('.stacks').append(this.$el);
  },
  initialize: function(){
  	this.render();
  }
});

var ruby = new StackModel({name: 'Ruby'});
var mean = new StackModel({name: 'Javascript'});
var lamp = new StackModel({name: 'PHP'});
var python = new StackModel({name: 'Python'});
var ios = new StackModel({name: 'Swift'});

var rubyView = new StackView({model: ruby});
var meanView = new StackView({model: mean});
var lampView = new StackView({model: lamp});
var pythonView = new StackView({model: python});
var iosView = new StackView({model: ios});
