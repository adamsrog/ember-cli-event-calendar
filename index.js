/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-event-calendar',
	
	included: function(app) {
		this._super.included(app);

		app.import(path.join(app.bowerDirectory, '/moment/moment.js'));
		app.import(app.bowerDirectory + '/ember-cli-moment-shim/moment-shim.js', {
			exports: {
				moment: ['default']
			}
		});

		app.import(path.join(app.bowerDirectory, '/jquery-eventcalendar/css/eventCalendar.css'));
		app.import(path.join(app.bowerDirectory, '/jquery-eventcalendar/css/eventCalendar_theme_flat.css'));
		app.import(path.join(app.bowerDirectory, '/jquery-eventcalendar/js/jquery.eventCalendar.js'));
	}
};
