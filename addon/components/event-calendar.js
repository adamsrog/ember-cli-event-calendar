import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['id'],
	id: 'events-calendar',
	classNames: ['event-calendar-component'],

	eventsJson: 'js/events.json',
	eventsLimit: 4,
	eventsScrollable: false,

  locales: 'json/locale.en.json',

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
      locales: this.get("locales"),
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