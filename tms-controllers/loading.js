(function(app) {
	app.LoadingAppComponent =
		ng.core.Component({
		selector: 'loading-app',
		templateUrl: 'views/loading.html'
		})
	.Class({
		constructor: [ng.router.ActivatedRoute,ng.router.Router,app.AppCallService,
			function(active,router,ser) {
				this.active=this.active;
				this.router=router;
				this.ser=ser;
			}
		]
	});
	app.LoadingAppComponent.prototype.ngOnInit=function(){
		localStorage.setItem("access_token","f65a98c0-4577-11ec-a172-cd3e8fa8b654");
		this.imagen_src="assets/images/loading.gif";
		this.menu=null;
		this.dataShow = _('message_dflt_2');
		if(this.ser.getAccessToken()==null){
			this.dataShow = _('message_dflt_1');
			setTimeout(function() {
				window.location.href = redirectUri();
			}, 2000);
		}else{
			this.getInit();
		}
	}
	app.LoadingAppComponent.prototype.getInit=function(){
		let mensajeAll=_('message_dflt_1');
		let request=this.ser.callServicesHttp('init-auth',"?role_owner_id="+this.ser.getBusinessId(),null);
		request.subscribe(data2=>{
			if(!(data2==null || data2==undefined || data2=="")){
				if(data2.status_http==200){
					delete data2['status_http'];
					let init=null;
					if(data2.hasOwnProperty("profile")){
						if(!(data2.profile==null || data2.profile==undefined || data2.profile=="")){
							init=data2.profile;
							if(data2.hasOwnProperty("country")){
								if(!(data2.country==null || data2.country==undefined || data2.country=="")){
									init.country=data2.country;
									this.ser.setInit(init);
								}
							}
							if(data2.hasOwnProperty("role")){
								if(!(data2.role==null || data2.role==undefined || data2.role=="")){
									this.ser.setRole(data2.role);
									this.redirectInit();
								}else{
									this.dataShow=_('message_dflt_3');
									setTimeout(function() {
										window.location.href = redirectUri();
									}, 2000);
								}
							}else{
								this.dataShow=_('message_dflt_3');
								setTimeout(function() {
									window.location.href = redirectUri();
								}, 2000);
							}
						}else{
							this.dataShow=mensajeAll;
							setTimeout(function() {
								window.location.href = redirectUri();
							}, 2000);
						}
					}else{
						this.dataShow=mensajeAll;
						setTimeout(function() {
							window.location.href = redirectUri();
						}, 2000);
					}
				}else{
					this.dataShow=this.ser.processMessageError(data2,mensajeAll);
					setTimeout(function() {
						window.location.href = redirectUri();
					}, 2000);
				}
			}
		},err=>{
			this.dataShow=this.ser.processError(err,mensajeAll);
			setTimeout(function() {
				window.location.href = redirectUri();
			}, 2000);
		});
	}
	app.LoadingAppComponent.prototype.redirectInit = function() {
		this.router.navigate(['/apps-report']);
	}
})(window.app || (window.app = {}));
