module.exports = {
	normalizeEntityName: function(entityName)  {
		return entityName;
	},

	afterInstall: function() {
		return this.addBowerPackageToProject("adamsrog/jQueryEventCalendar", "0.0.1");
	}
};