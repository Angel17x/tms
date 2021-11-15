(function (app) {
    'use strict';
    app.SideBarComponent = ng.core 
    .Component({
        selector: 'sidebar',
        templateUrl: 'views/sidebar_v1.html',
        inputs:['title','subtitle']
    })
    .Class({
        constructor: [app.AppCallService,ng.router.Router,
        function(servicio,router) {
			this.service=servicio;
			this.router=router;
        }]
     });
    app.SideBarComponent.prototype.ngOnInit = function () {
		this.getData();
	}
	app.SideBarComponent.prototype.getData=function(){
		this.title=this.service.getBusinessName();
		this.subtitle=this.service.getBusinessEmail();
	}
	app.SideBarComponent.prototype.signOut=function(){
		if(this.service.getAccessToken()==null){
			doLogout();
			window.location.href=redirectUri();
		}else{
			let request=this.service.callServicesHttp('logout',null,null);
			request.subscribe(data=>{
				doLogout();
				window.location.href=redirectUri();
			},err=>{
				doLogout();
				window.location.href=redirectUri();
			});
		}
	}
	app.SideBarComponent.prototype.goApps=function(){
        window.location.href=redirectUri();
	}
})(window.app || (window.app = {}));