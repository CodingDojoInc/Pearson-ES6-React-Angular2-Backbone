# Putting Collections in Charge
![People List](https://github.com/CodingDojoInc/Pearson-ES6-React-Angular2-Backbone/blob/master/Backbone/exercises/6_3_Collection_Views_Build_Model_Views/Collection_Views_Assignment.png)

Use the code base below to recreate the wireframe.

```javascript
$(document).ready(function(){
  var PersonModel = Backbone.Model.extend({
  	defaults:{id: null, name: null}
  });

  var PeopleList = Backbone.Collection.extend({
  	model: PersonModel
  });

  var person1 = new PersonModel({name: "Speros"});
  var person2 = new PersonModel({name: "Mike"});
  var person3 = new PersonModel({name: "Martin"});
  var person4 = new PersonModel({name: "Charlie"});
  var person5 = new PersonModel({name: "Dylan"});
  var person6 = new PersonModel({name: "Kris"});

  var myPeople = new PeopleList([person1, person2, person3, person4, person5, person6]);

  var myPersonTemplate = "<h1><%= name %></h1>";

  var PersonView = Backbone.View.extend({
  	tagName: 'li',
  	template: _.template(myPersonTemplate),
  	initialize: function(){
  		this.render();
  	},
  	render: function(){

  	}
  });

  var PeopleListView = Backbone.View.extend({
  	el: //...
    initialize: function(){
      this.render();
    },
  	render: function(){
      //...
  	}
  });

  var myPeopleList = new PeopleListView({collection: myPeople});
});
```
