# ember-cli-event-calendar

This is an ember-addon for implementing my fork of [jQueryEventCalendar](https://github.com/adamsrog/jQueryEventCalendar) plugin.  This is a work in progress!

See [rogerada.ms/ember-cli-event-calendar](http://rogerada.ms/ember-cli-event-calendar/) for a live demo.

Source for the live demo can be found [here](https://github.com/adamsrog/event-calendar-example).

## Installation as an addon
* `ember install:addon ember-cli-event-calendar`

## Usage as an Addon
* `{{event-calendar}}`

## Parameters
The following parameters can be specified in the `{{event-calendar}}` helper.  The values after the parameter are the default values used if left unspecified.

* eventsJson: 'js/events.json'
* eventsLimit: 4
* eventsScrollable: false
* jsonDateFormat: 'human'
* jsonData: ''
* cacheJson: true
* dateFormat: 'MMMM Do YYYY'
* monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
* dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
* dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
* txt_noEvents: 'Your calendar is clear.'
* txt_SpecificEvents_prev: ''
* txt_SpecificEvents_after: 'events:'
* txt_next: ''
* txt_prev: ''
* txt_NextEvents: 'Next events:'
* txt_GoToEventUrl: 'See the event'
* txt_NumAbbrevTh: 'th'
* txt_NumAbbrevSt: 'st'
* txt_NumAbbrevNd: 'nd'
* txt_NumAbbrevRd: 'rd'
* txt_loading: 'loading...'
* startWeekOnMonday: false
* showDayAsWeeks: true
* showDayNameInCalendar: true
* showDescription: false
* onlyOneDescription: true
* openEventInNewWindow: false
* moveSpeed: 500
* moveOpacity: 0.15

## Using jsonData parameter
You can pass in an array of objects for the `jsonData` parameter to populate the calendar.  This is what it should look like:
```
[
	{
		"date":"2015-3-26 14:11:00",
		"title":"test event",
		"url":"https://www.google.com/calendar/event?eid=id-from-google-api",
		"description":"description of event"
	},
	{...},
]
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
