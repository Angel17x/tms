(function(app) {
  app.routing = ng.router.RouterModule.forRoot([
  	{path: '', redirectTo: 'loading', pathMatch: 'full'},
	{path:'loading',component:app.LoadingAppComponent},
	{path:'apps-report',component:app.AppReportComponent},
	{path:'upload-version',component:app.UploadVersionComponent},
  ],{useHash: true});
})(window.app || (window.app = {}));