var ironman = {
  name: "Tony Stark",
  alias: "Iron Man"
};

var ironmanTemplate = _.template("<h1>Hello there, <%= name %></h1>");

ironmanTemplate(ironman);
