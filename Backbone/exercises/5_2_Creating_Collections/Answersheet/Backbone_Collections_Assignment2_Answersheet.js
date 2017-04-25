var StarshipModel = Backbone.Model.extend({
  defaults: {
    name: null,
    manufacturer: null,
    crew: null,
    cost_in_credits: null
  }
});

var StarshipCollection = Backbone.Collection.extend({
  model: StarshipModel,
  url: 'http://swapi.co/api/starships',
  parse: function(starships){
    return starships.results;
  },
  falconChecker: function(){
    _.each(this.models, function(ship){
      if (ship.get('name') === 'Millennium Falcon'){
        ship.set('cost_in_credits','priceless');
      }
    });
  }
});

var shipCollection = new StarshipCollection();
shipCollection.fetch()
  .then(function(){
    shipCollection.falconChecker();
    console.log(shipCollection.findWhere({name: "Millennium Falcon"}).changed);
    // console.log(shipCollection.models);
  });
