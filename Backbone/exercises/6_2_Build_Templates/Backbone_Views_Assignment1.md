# Build Your Own View

The only time we referenced any sort of model data in the previous content was when we passed the model to the template in the render function, but how does it get to the view?

```javascript
render: function(){
  this.$el.html(this.template(this.model.toJSON()));
  ...
}
```
We can pass a model to a view simply by passing a model instance into a view instance...
```javascript
var barry = new Person({name: 'Barry'});
var personView1 = new PersonView({model: barry});
```

Use this HTML snippet as a starting point.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Backbone Views</title>
    <script src="jquery"></script>
    <script src="underscore"></script>
    <script src="backbone"></script>
  </head>
  <body>
    <h1>People & Stacks</h1>
    <ul class="people"></ul>
    <div class="stacks"></div>
  </body>
</html>
```

![People & Stacks](https://github.com/CodingDojoInc/Pearson-ES6-React-Angular2-Backbone/blob/master/Backbone/exercises/6_2_Build_Templates/Backbone_Views_Assignment1.png)

#### Criteria
- Every Person model needs a name.
- Every Stack model needs a language.
- Each Person model's corresponding view should have:
  - a header with their name
- Each Stack model's corresponding view should have:
  - a smaller header with the stack language
- Represent 5 people and 5 stacks and place them in their corresponding <ul> or <div>
- Use the appropriate tagName!
