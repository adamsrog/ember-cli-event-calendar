import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['id'],
	id: 'events-calendar',
	classNames: ['event-calendar-component'],

	eventsJson: 'js/events.json',
	eventsLimit: 4,
	eventsScrollable: false,

	monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

	txt_noEvents: 'Your calendar is clear.',
	txt_SpecificEvents_prev: '',
	txt_SpecificEvents_after: 'events:',
	txt_next: '',
	txt_prev: '',
	txt_NextEvents: 'Next events:',
	txt_GoToEventUrl: 'See the event',
	txt_NumAbbrevTh: 'th',
	txt_NumAbbrevSt: 'st',
	txt_NumAbbrevNd: 'nd',
	txt_NumAbbrevRd: 'rd',
	txt_loading: 'loading...',

	startWeekOnMonday: false,
	showDayAsWeeks: true,
	showDayNameInCalendar: true,
	showDescription: false,
	onlyOneDescription: true,
	openEventInNewWindow: false,
	
	dateFormat: 'MMMM Do YYYY',
	jsonDateFormat: 'human',
	jsonData: '',
	cacheJson: true,

	moveSpeed: 500,
	moveOpacity: 0.15,

	defaults: Ember.computed('eventsJson', 'eventsLimit', 'eventsScrollable', 'monthNames', 'dayNames', 'dayNamesShort', 'txt_noEvents', 'txt_SpecificEvents_prev', 'txt_SpecificEvents_after', 'txt_next', 'txt_prev', 'txt_NextEvents', 'txt_GoToEventUrl', 'txt_NumAbbrevTh', 'txt_NumAbbrevSt', 'txt_NumAbbrevNd', 'txt_NumAbbrevRd', 'txt_loading', 'startWeekOnMonday', 'showDayAsWeeks', 'showDayNameInCalendar', 'showDescription', 'onlyOneDescription', 'openEventInNewWindow', 'dateFormat', 'jsonDateFormat', 'jsonData', 'cacheJson', 'moveSpeed', 'moveOpacity', function() {
		var defaults = {
			eventsJson: this.get('eventsJson'),
			eventsLimit: this.get('eventsLimit'),
			eventsScrollable: this.get('eventsScrollable'),
			monthNames: this.get('monthNames'),
			dayNames: this.get('dayNames'),
			dayNamesShort: this.get('dayNamesShort'),
			txt_noEvents: this.get('txt_noEvents'),
			txt_SpecificEvents_prev: this.get('txt_SpecificEvents_prev'),
			txt_SpecificEvents_after: this.get('txt_SpecificEvents_after'),
			txt_next: this.get('txt_next'),
			txt_prev: this.get('txt_prev'),
			txt_NextEvents: this.get('txt_NextEvents'),
			txt_GoToEventUrl: this.get('txt_GoToEventUrl'),
			txt_NumAbbrevTh: this.get('txt_NumAbbrevTh'),
			txt_NumAbbrevSt: this.get('txt_NumAbbrevSt'),
			txt_NumAbbrevNd: this.get('txt_NumAbbrevNd'),
			txt_NumAbbrevRd: this.get('txt_NumAbbrevRd'),
			txt_loading: this.get('txt_loading'),
			startWeekOnMonday: this.get('startWeekOnMonday'),
			showDayAsWeeks: this.get('showDayAsWeeks'),
			showDayNameInCalendar: this.get('showDayNameInCalendar'),
			showDescription: this.get('showDescription'),
			onlyOneDescription: this.get('onlyOneDescription'),
			openEventInNewWindow: this.get('openEventInNewWindow'),
			dateFormat: this.get('dateFormat'),
			jsonDateFormat: this.get('jsonDateFormat'),
			jsonData: this.get('jsonData'),
			cacheJson: this.get('cacheJson'),
			moveSpeed: this.get('moveSpeed'),
			moveOpacity: this.get('moveOpacity'),			
		};
		if (defaults.jsonData !== '') {
			defaults.eventsJson = '';
		}
		return defaults;
	}),

	didInsertElement: function() {
		Ember.$("#events-calendar").eventCalendar(this.get('defaults'));
	}

});