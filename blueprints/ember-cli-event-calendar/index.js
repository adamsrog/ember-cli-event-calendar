module.exports = {
	normalizeEntityName: function(entityName)  {
		return entityName;
	},

	afterInstall: function() {
		return this.addBowerPackageToProject("jquery-event-calendar", "adamsrog/jQueryEventCalendar")
	}
};