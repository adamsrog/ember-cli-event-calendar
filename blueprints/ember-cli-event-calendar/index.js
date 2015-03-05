module.exports = {
	normalizeEntityName: function()  {
    // this prevents an error when the entityName is not specified
	},

	afterInstall: function() {
		return this.addBowerPackagesToProject([
			{ name: 'moment', target: '>=2.8.3' },
			{ name: 'jasonmit/ember-cli-moment-shim', target: '0.0.3' },
			{ name: 'adamsrog/jQueryEventCalendar', target: '0.0.1' }
		]);
	}
};