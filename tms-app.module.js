(function(app) {
  app.AppModule =
    ng.core.NgModule({
		imports: [
			ng.platformBrowser.BrowserModule,
			ng.forms.FormsModule,
			ng.router.RouterModule,
			ng.http.HttpModule,
			app.routing			
		],
		declarations: [
			app.MsgComponent,
			app.CustomTableComponent,
			app.SideBarComponent,
			app.LoadingServiceComponent,
			app.LoadingAppComponent,
			app.AppReportComponent,
			app.UploadVersionComponent,
			app.AppComponent
		],
		providers: [
			app.AppCallService,
			app.MsgComponent,
			app.CustomTableComponent,
			app.LoadingServiceComponent
		],
		bootstrap: [app.AppComponent]
   }).Class({
      constructor: function() {}
   });
})(window.app || (window.app = {}));