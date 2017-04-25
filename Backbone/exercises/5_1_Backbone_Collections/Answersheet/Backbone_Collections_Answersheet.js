var TravelTimeModel = Backbone.Model.extend({
	defaults:{

	}
});

var TravelTimeCollection = Backbone.Collection.extend({
	model: TravelTimeModel,
	url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
})

var travelTimes = new TravelTimeCollection();

travelTimes.fetch().then(function(){
	console.log(travelTimes);
	console.log(travelTimes.length);
	console.log(travelTimes.at(30));
	console.log(travelTimes.models[0].get("CurrentTime"));
	console.log(travelTimes.where({CurrentTime: 10}));
	console.log(travelTimes.findWhere({Name: "Bellevue-Seattle via 520 (WB PM)"}));
});
