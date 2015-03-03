import Ember from 'ember';

export default Ember.Controller.extend({
	events: [
		{
			"date":"2014-11-26 14:11:00",
			"title":"test todo",
			"url":"https://www.google.com/calendar/event?eid=ZTRtY2Fua25ocHJqN2dnOThndm9icDk5M3Mgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-11-22 14:11:00",
			"title":"another test",
			"url":"https://www.google.com/calendar/event?eid=ZGhndWNha2xsNW40am5sYmNpMDdkczg4dGMgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-11-22 14:11:00",
			"title":"test todo on kory",
			"url":"https://www.google.com/calendar/event?eid=dGY2bnA5NWY3b3RmNDhiNGk4aTZqNTdpOGcgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-11-22 14:11:00",
			"title":"this is another todo",
			"url":"https://www.google.com/calendar/event?eid=c2g4YzcwNzQ0bzNqNHRhbGhrM2pnbmtvZ2Mgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-12-03 18:12:00",
			"title":"test",
			"url":"https://www.google.com/calendar/event?eid=cG82ZGxpMWJqZG82a2VuMWQ1ZTZodjZtMWsgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-12-05 23:12:00",
			"title":"hi kory",
			"url":"https://www.google.com/calendar/event?eid=c3B2ZmN2YWxlODgyaGoxdHQ3a3Q2Z29wOGMgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-12-06 00:12:00",
			"title":"Testing Todo",
			"url":"https://www.google.com/calendar/event?eid=Nmdwc2o0Nzl1cnBoc250Z2Z0MTQ3dW1uN2cgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-12-06 00:12:00",
			"title":"Yet another todoooo",
			"url":"https://www.google.com/calendar/event?eid=NjJmMDVqbzB0ZWY1OW41cjE3aGZtajhibTQgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2014-12-13 00:12:00",
			"title":"This is a long todo text for testing what the table does to fit all of this text!",
			"url":"https://www.google.com/calendar/event?eid=NmtubDFuOG1yZDlhMWplbDJmZml0Z3JtcTAgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-03-05 15:03:00",
			"title":"TEST TODO!",
			"url":"https://www.google.com/calendar/event?eid=cGZpOTVqMmFpdGRjcmZxNThvbWc4NDRpZWMgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-26 17:02:00",
			"title":"(Katie Johnson, other) Cash checks from selling house.",
			"url":"https://www.google.com/calendar/event?eid=ZDkxM2RiMjQ4OGIyNDVhOWExMDAyOWI4NDkyMzZmZDUgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-19 09:02:00",
			"title":"Pick up from Seattle for pi-dev meeting",
			"url":"https://www.google.com/calendar/event?eid=YjY5ZmlmYW9zMjY1OWk4aGlvbjBvbGRkb2sgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-19 22:02:00",
			"title":"Pi-Dev meeting tomorrow!","url":"https://www.google.com/calendar/event?eid=OHRsY29kbHByNHBkbmNsYWplY2NsOGlzOWMgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-19 00:02:00",
			"title":"late todo test",
			"url":"https://www.google.com/calendar/event?eid=dThpZGNtOHVnZm8zYmRrMzFiOW9ycmVsMDQgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-19 00:02:00",
			"title":"test late kate todo",
			"url":"https://www.google.com/calendar/event?eid=aWVudGswcnU5YWF1a2I0dTZicDRpbW9vaWcgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-02-19 00:02:00",
			"title":"this is a late todo","url":"https://www.google.com/calendar/event?eid=Z2U5azhsYnJyN2U4OWgwdWU0NnJlcWtycXMgc29jaWFscG93ZXJpbmMuY29tX2dlYTVtMDR0YzZkbWRtbmk0ampqcHBhYzM4QGc",
			"description":""
		},
		{
			"date":"2015-01-13 09:01:00",
			"title":"Production Meeting",
			"url":"https://www.google.com/calendar/event?eid=dnI0N29iZHB2MGlsc29sbTRha2Y5cjVzOWsgcm9nZXJAcGlkZXZlbG9wbWVudC5vcmc",
			"description":""
		},
		{
			"date":"2015-01-15 09:01:00",
			"title":"Production Meeting",
			"url":"https://www.google.com/calendar/event?eid=bTJyZjJjdTlzcGY0ZGtuM2l0ZXJoN3JmdTggcm9nZXJAcGlkZXZlbG9wbWVudC5vcmc",
			"description":""
		}
	]
});