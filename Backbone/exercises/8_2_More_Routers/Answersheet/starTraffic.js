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
  }
});

var StarshipView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#starship').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var StarshipListView = Backbone.View.extend({
  el: '#output',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function(){
    this.$el.empty();

    this.collection.each(function(starship){
      var starshipView = new StarshipView({model: starship});
      this.$el.append(starshipView.render().$el);
    }, this);

    return this;
  }
});

var TravelTimeModel = Backbone.Model.extend({
	defaults:{
    Description: null,
    AverageTime: null
	}
});

var TravelTimeCollection = Backbone.Collection.extend({
	model: TravelTimeModel,
	url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
});

var TripView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#traffic').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var TripListView = Backbone.View.extend({
  el: '#output',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function(){
    this.$el.empty();

    this.collection.each(function(trip){
      var tripView = new TripView({model: trip});
      this.$el.append(tripView.render().$el);
    }, this);

    return this;
  }
});

var SpaceTrafficRouter = Backbone.Router.extend({
  routes: {
    'starships': 'renderStarships',
    'traffic': 'renderTraffic',
    '*default': 'renderStarships'
  },
  renderStarships: function(){
    shipCollection.fetch();
  },
  renderTraffic: function(){
    travelTimes.fetch();
  }
});

var shipCollection = new StarshipCollection();
var travelTimes = new TravelTimeCollection();
var allShipsView = new StarshipListView({collection: shipCollection});
var allTripsView = new TripListView({collection: travelTimes});
var stRouter = new SpaceTrafficRouter();
Backbone.history.start();
