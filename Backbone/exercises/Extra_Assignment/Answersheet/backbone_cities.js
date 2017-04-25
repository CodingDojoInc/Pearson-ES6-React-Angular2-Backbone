var CityModel = Backbone.Model.extend({
	idAttribute: "_id",
	defaults: {
		name: null,
		country: null,
		population: null
	}
});

var CityCollection = Backbone.Collection.extend({
	model: CityModel,
	url: '/cities'
});

var CityListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#cityView').html()),

	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$('.edit').hide();
		return this;
	},

	events: {
		'click button.destroy':'removeCity',
		'dblclick div.city': 'editCity',
		'click button.save_edits': 'saveEdits'
	},

	removeCity: function(){
		this.model.destroy({wait: true});
	},

	editCity: function(){
		this.$('.city').hide();
		this.$('.edit').show();
	},

	saveEdits: function(){
		var newName = this.$el.find('input[name="name"]').val();
		var newCountry = this.$el.find('input[name="country"]').val();
		var newPopulation = this.$el.find('input[name="population"]').val();

		this.model.save({
			name: newName,
			country: newCountry,
			population: newPopulation
		});

		this.backToNormal();
	},

	backToNormal: function(){
		this.$('.city').show();
		this.$('.edit').hide();
	}

});

var CityListView = Backbone.View.extend({
	el: '#list_view_scope',

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'change', this.render);
	},

	render: function(){
		var $list = this.$('ul#cities').empty();

		this.collection.each(function(city){
			var cityItem = new CityListItemView({model: city});
			$list.append(cityItem.render().$el);
		}, this);

		return this;
	},

	events: {
		'click #newCity':'createCity'
	},

	createCity: function(){
		$name = this.$('#city_name');
		$country = this.$('#city_country');
		$population = this.$('#city_pop');

		if ($name.val() && $country.val() && $population.val()){
			this.collection.create({
				name: $name.val(),
				country: $country.val(),
				population: $population.val()
			});

			$name.val('');
			$country.val('');
			$population.val('');
		}else{
			// print an error
		}
	}
});

var citiesList = new CityCollection();
var citiesView = new CityListView({collection: citiesList});

citiesList.fetch();
