
'use strict';

var sw = sw || {};


// titles
// baron, captian, princess, emperor

sw.person = {

	create: function (title) {

		if(title) {
			return sw.person.title() + '. ' + sw.person.first_name() + '' + sw.person.last_name();
		}

		return sw.person.first_name() + '' + sw.person.last_name();
	},

	title: function () {
		var titles_array = [
			'Baron',
			'Captian',
			'Pricess',
			'Emperor',
			'Master'
		];

		return titles_array[Math.floor(Math.random() * titles_array.length)];
	},

	first_name: function () {
		var first_names_array = [
			'Anakin',
			'Beed',
			'Bossk',
			'C-3PO',
			'Lando',
			'Chewbacca',
			'Biggs',
			'Greedo',
			'Owen',
			'Leia',
			'Luke',
			'R2-D2',
			'Han',
			'Yoda'
		];

		return first_names_array[Math.floor(Math.random() * first_names_array.length)];
	},

	last_name: function () {
		var last_names_array = [
			'Antilles',
			'Ashgad',
			'Calrissian',
			'Delso',
			'Kenobi',
			'Lars',
			'Shan',
			'Skywalker',
			'Solo',
			'Tarkin'
		];

		return last_names_array[Math.floor(Math.random() * last_names_array.length)];
	}
};