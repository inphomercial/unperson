
'use strict';

var sw = sw || {};

sw.location = {

	city: function() {
		var city_array = [
			'Aldera',
			'Bela Vistal',
			'Imperial City',
			'Mos Eisley',
			'Mos Entha',
			'Sundari',
		];

		return city_array[Math.floor(Math.random() * city_array.length)];
	},

	state: function() {
		var state_array = [
			'Alderaan',
			'Bespin',
			'Corellia',
			'Dantooine',
			'Endor',
			'Naboo',
			'Rori',
			'Yavin'
		];

		return state_array[Math.floor(Math.random() * state_array.length)];
	}
};