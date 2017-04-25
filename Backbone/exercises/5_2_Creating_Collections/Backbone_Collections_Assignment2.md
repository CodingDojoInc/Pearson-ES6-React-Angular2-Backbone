# Star Wars API
The Star Wars API, hosted by the same crew that provide the Pokemon API, has a large amount of Star Wars information.  For this assignment, you'll build a collection of starships.


#### Using the API url http://swapi.co/api/starships and what we know about Underscore, Backbone Models and Collections, do the following:
- Your collection needs to track each starship's name, manufacturer, crew, and cost_in_credits.
- In order to get to the results of the returned JSON information, use parse as part of the collection class.  Like so:

```javascript
var StarshipCollection = Backbone.Collection.extend({
    model: StarshipModel,
    url: 'http://swapi.co/api/starships',
    parse: function(starships){ // parse will be called upon fetching to help unravel where any nested information lives
        return starships.results;
    },
  //...
```

- Create a falconChecker method within your collection that checks if the name of a starship is "Millennium Falcon" and sets its cost_in_credits to "priceless".  Make sure to use `_.each(), get(), and set()` to accomplish this.
- Invoke your falconChecker method when you get a successful fetch.
- Verify your falconChecker method worked properly by using `_.findWhere()` on your collection to find the "Millennium Falcon" model and inspect its `changed` property.  This can be done after a successful fetch as well.
