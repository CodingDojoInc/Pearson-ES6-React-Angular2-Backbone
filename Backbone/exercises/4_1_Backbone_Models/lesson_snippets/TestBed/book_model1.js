var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    console.log("I'm alive!");
  }
});

var myBook = new BookModel();
console.log(myBook);

$('#model').html(JSON.stringify(myBook));
$('#author').html(JSON.stringify(myBook.attributes.author));
