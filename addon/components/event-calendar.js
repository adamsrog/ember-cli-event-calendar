import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['event-calendar-component'],

	// defaults
	eventsJson: 'js/events.json',
	eventsLimit: 4,
	eventsScrollable: false,

	monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: [ 'Sun','Mon','Tue','Wed', 'Thu','Fri','Sat' ],

	txt_noEvents: 'Your calendar is clear.',
	txt_SpecificEvents_prev: '',
	txt_SpecificEvents_after: 'events:',
	txt_next: 'next',
	txt_prev: 'prev',
	txt_NextEvents: 'Next events:',
	txt_GoToEventUrl: 'See the event',
	txt_NumAbbrevTh: 'th',
	txt_NumAbbrevSt: 'st',
	txt_NumAbbrevNd: 'nd',
	txt_NumAbbrevRd: 'rd',
	txt_loading: 'loading...',

	startWeekOnMonday: true,
	showDayAsWeeks: true,
	showDayNameInCalendar: true,
	showDescription: false,
	onlyOneDescription: true,
	openEventInNewWindow: false,
	
	dateFormat: 'MMMM Do YYYY. h:mm a',
	jsonDateFormat: 'human',
	jsonData: '',
	cacheJson: true,

	moveSpeed: 500,
	moveOpacity: 0.15,

	didInsertElement: function() {
		Ember.$("#events-calendar").eventCalendar();
	}

});
