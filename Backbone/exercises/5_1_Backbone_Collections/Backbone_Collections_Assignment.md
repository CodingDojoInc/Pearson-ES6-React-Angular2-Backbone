# Getting Comfortable with Collections
A necessary and quite cool Chrome extension we'll be using to test this assignment is called Allow-Control-Allow-Origin.  It can be found [here](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).  What it does is allow us to make cross-domain AJAX requests from our local machine.  Add the extension.  An icon will be added to your browser that says CORS.  If it is red, click the icon and flip the switch.  Green means we're good to go!

Thanks to the Washington State Department of Transportation, they've created a RESTful API the public can use to stay up to date on their travel information around the state of Washington.  If you want to learn more about the API, visit  http://wsdot.com/Traffic/api

```javascript
var TravelTimeModel = Backbone.Model.extend({
	defaults:{

	}
});
var TravelTimeCollection = Backbone.Collection.extend({
	model: TravelTimeModel,
	url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
})
var travelTimes = new TravelTimeCollection();
```

#### Copy down the starting code from above to console log the following... (Remember to fetch first before performing any of these operations)

- The travelTimes collection
- The length of the travelTimes collection
- The 30th model in the list [Requirement: use the at() method]
- The CurrentTime of the first model [Do this without using at()]
- All the models with a CurrentTime of 10
- The first model with the Name: "Bellevue-Seattle via 520 (WB PM)"
