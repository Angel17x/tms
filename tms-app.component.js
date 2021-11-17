(function(app) {
	app.AppComponent =
		ng.core.Component({
		  selector: 'tms-app',
		  templateUrl: 'tms-app.component.html'
		})
		.Class({
		  constructor: [function() {

		  }]
		});
})(window.app || (window.app = {}));