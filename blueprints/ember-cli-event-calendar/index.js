module.exports = {
	normalizeEntityName: function(entityName)  {
		return entityName;
	},

	afterInstall: function() {
		return this.addBowerPackageToProject("adamsrog/jQueryEventCalendar", "jquery-event-calendar")
	}
};