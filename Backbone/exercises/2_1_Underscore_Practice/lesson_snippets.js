var ironman = {
  name: "Tony Stark",
  alias: "Iron Man"
};

_.each(ironman, function(value, key){ alert(key+': '+value); });

var avengersAssemble = _.map(avengers_array, function(avenger){ return avenger; });

var onlyTonyArray = _.filter(avengers_array, function(avenger){ return avenger.name === "Tony"; });

var avengers_array = [
  {name: "Tony", alias: "Iron Man"},
  {name: "Bruce", alias: "The Incredible Hulk"},
  {name: "Steve", alias: "Captain America"}
];

var sortedAvengerNames = _.sortBy(avengers_array, 'name');
