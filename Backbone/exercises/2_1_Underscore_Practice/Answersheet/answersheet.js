//1.
var keys = _.keys(myState);
var values = _.values(myState);
console.log(keys);
console.log(values);

//2.
var newObj = _.object(keys, values);
console.log(newObj);

//3.
_.each(myState, function(value, key){
	alert(key+": "+value);
});

//4.
var businessNames = _.pluck(businesses, 'name');
console.log(businessNames);

//5.
var micro = _.findWhere(businesses, {name: "Microsoft"});
console.log(micro);

//6.
var bellevueBusinesses = _.filter(businesses, function(business){
 	return business.city == "Bellevue"; 
});
console.log(bellevueBusinesses);

//7.
var sortedBusinesses = _.sortBy(businesses, 'city');
console.log(sortedBusinesses);

//8.
var allDojoBusinesses = _.map(businesses, function(business){ 
	business.name = "Coding Dojo";
	return business; 
});
console.log(allDojoBusinesses);