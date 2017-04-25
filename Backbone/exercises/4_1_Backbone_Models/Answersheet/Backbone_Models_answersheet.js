var StackModel = Backbone.Model.extend({
  defaults: {
    title: null,
    instructor: null,
    language: null
  },
  initialize: function(){
    this.set('instructor', 'Michael Choi');
  }
});

var stack1 = new StackModel();
stack1.set('title', 'Ruby on Rails');
stack1.set('language', 'Ruby');

var stack2 = new StackModel();
stack2.set('title', 'MEAN');
stack2.set('language', 'Javascript');

console.log(stack1);
console.log(stack2);
