(function(app) {
	app.AppReportComponent =
		ng.core.Component({
		selector: 'app-report',
		templateUrl: 'views/app-report.html'
		})
	.Class({
		constructor: [ng.router.ActivatedRoute,ng.router.Router,app.AppCallService,app.MsgComponent,
			function(active,router,service,msg) {
				this.active=active;
				this.router=router;
				this.service=service;
				this.msg=msg;
			}
		]
	});
	app.AppReportComponent.prototype.ngOnInit=function(){
		this.title=_("title17");
		this.detallePorPagina=10;
		this.totalPage=1;
		this.listRegister=[];
		this.pageSelected=1;
		this.pagingActual={};
		// try{
		// 	var g=document.getElementsByClassName('modal-backdrop')[0];
		// 	if(g!=null){
		// 		var padre=g.parentNode;
		// 		padre.removeChild(g);
		// 	}
		// }catch(er){
		// }
		this.status=null;
		this.init=null;
		this.end=null;
		this.name=null;
		this.package_name=null;
		this.listStatus=[{value:null,name:"Todas"},{value:"ACTIVE",name:"Activa"},{value:"INACTIVE",name:"Inactiva"}];
		this.checkRol();
	}
	app.AppReportComponent.prototype.checkRol=function(){
		this.actions=[];
		this.vistas=[];
		var flag=false;
    	if(this.service.getRole()!=null){
			if(this.service.getRole().hasOwnProperty("views")){
				if(!(this.service.getRole().views==null || this.service.getRole().views==undefined || this.service.getRole().views=="")){
					var tabla=orderList(this.service.getRole().views);
					var objeto=null;
					for(var i=0;i<tabla.length;i++){
						if(tabla[i]!=null){
							if(tabla[i].name=="APPS"){
								flag=true;
								if(tabla[i].hasOwnProperty("actions")){
									if(!(tabla[i].actions==null || tabla[i].actions==undefined || tabla[i].actions=="" || tabla[i].actions.length==0)){
										for(var j=0;j<tabla[i].actions.length;j++){
											if(tabla[i].actions[j]!=null){
												objeto=null;
												objeto=this.formattedActions(tabla[i].actions[j]);
												if(objeto!=null){
													this.actions.push(objeto);
												}
											}
										}
									}
								}
							}else{
								if(tabla[i].tag=="APPS"){
									objeto=null;
									objeto=this.formattedView(tabla[i]);
									if(objeto!=null){
										this.actions.push(objeto);
									}
								}
							}
						}
					}
					if(!flag){
						this.router.navigate(['/not-user']);
					}
				}else{
					this.router.navigate(['/not-user']);
				}
			}else{
				this.router.navigate(['/not-user']);
			}
		}else{
			this.router.navigate(['/not-user']);
		}
	}
	app.AppReportComponent.prototype.formattedActions=function(data){
		if(data==null || data==undefined || data==""){
			return null;
		}else{
			return data;
		}
	}
	app.AppReportComponent.prototype.formattedView=function(data){
		if(data==null || data==undefined || data==""){
			return null;
		}else{
			if(data.name=="APP-CREATE"){
				this.mostrarCrear=true;
				return null;
			}else{
				if(data.hasOwnProperty("functionality")){
					if(!(data.functionality==null || data.functionality==undefined || data.functionality=="")){
						data.functionality_detail=data.functionality;
					}
				}
				if(data.hasOwnProperty("url")){
					if(!(data.url==null || data.url==undefined || data.url=="")){
						data.router=data.url;
						data.type="PATH";
					}
				}
				return data;
			}
		}
	}
	app.AppReportComponent.prototype.search=function(){
		this.jsonFilter={};
		if(!(this.init==null || this.init==undefined || this.init=="" || this.end==null || this.end==undefined || this.end=="")){
			this.jsonFilter.created_at={};
			this.jsonFilter.created_at.lte=this.end+"T23:59:59.000Z";
			this.jsonFilter.created_at.gte=this.init+"T00:00:00.000Z";
			this.jsonFilter.created_at.time_zone=getTimeZone();
		}
		if(!(this.name==null || this.name==undefined ||this.name=="" || this.name=="null")){
			this.jsonFilter.name=this.name.trim();
		}
		if(!(this.package_name==null || this.package_name==undefined ||this.package_name=="" || this.package_name=="null")){
			this.jsonFilter.package_name=this.package_name.trim().toLowerCase();
		}
		if(!(this.status==null || this.status==undefined ||this.status=="" || this.status=="null")){
			this.jsonFilter.status=[this.status];
		}
		this.callServices(1,'&offset=0&limit='+this.detallePorPagina);
	}
	app.AppReportComponent.prototype.clean=function(){
		this.status=null;
		this.init=null;
		this.end=null;
		this.name=null;
		this.package_name=null;
	}
	app.AppReportComponent.prototype.getCantidadSelected=function(data){
		if (!(data == null || data == undefined || data == "")) {
			this.detallePorPagina = data.detalles;
			this.totalPage = data.pagina;
			if (this.listRegister == null || this.listRegister == undefined || this.listRegister.length == 0) {
				this.mensaje =_("message_dflt_4");
			} else {
				this.callServices(1, '&limit=' + this.detallePorPagina);
			}
		}
	}
	app.AppReportComponent.prototype.getValueFirst=function(data){
		this.listRegister = [];
		if (this.pagingActual.hasOwnProperty('first_page')) {
			if (!(this.pagingActual.first_page == null || this.pagingActual.first_page == undefined || this.pagingActual.first_page == "")) {
				this.callServices(data, this.pagingActual.first_page);
			}
		}
	}
	app.AppReportComponent.prototype.getValuePrevious=function(data){
		this.listRegister = [];
		if (this.pagingActual.hasOwnProperty('previous_page')) {
			if (!(this.pagingActual.previous_page == null || this.pagingActual.previous_page == undefined || this.pagingActual.previous_page == "")) {
				this.callServices(data, this.pagingActual.previous_page);
			}
		}
	}
	app.AppReportComponent.prototype.getValueLast=function(data){
		this.listRegister = [];
		if (this.pagingActual.hasOwnProperty('last_page')) {
			if (!(this.pagingActual.last_page == null || this.pagingActual.last_page == undefined || this.pagingActual.last_page == "")) {
				this.callServices(data, this.pagingActual.last_page);
			}
		}
	}
	app.AppReportComponent.prototype.getValueNext=function(data){
		this.listRegister = [];
		if (this.pagingActual.hasOwnProperty('next_page')) {
			if (!(this.pagingActual.next_page == null || this.pagingActual.next_page == undefined || this.pagingActual.next_page == "")) {
				this.callServices(data, this.pagingActual.next_page);
			}
		}
	}
	app.AppReportComponent.prototype.getValueChangeRecords=function(data){
		this.pageSelected = data;
	}
	app.AppReportComponent.prototype.callServices=function (data, parametros) {
		this.pageSelected = data;
		if(parametros!=null && parametros.length!=0){
			if(parametros.charAt(0)!="&"){
				parametros="&"+parametros;
			}
		}
		let querys="?type=PAGINATE"+parametros;
		let mensajeAll=_("message_dflt_4");
		let key="results";
		let request=this.service.callServicesHttp('app-report',querys,this.jsonFilter);
		request.subscribe(data=>{
			if(data==null || data==undefined || data==""){
				this.listRegister=[];
				this.mensaje=mensajeAll;
				this.msg.error();
			}else{
				if(data.status_http==200){
					delete data['status_http'];
					if(data.hasOwnProperty("count")){
						if(data.count==null || data.count==undefined || data.count==0){
							this.listRegister=[];
						}else{
							this.pagingActual = {};
							this.pagingActual.count = data.count;
							let auxP = Math.floor(this.pagingActual.count / this.detallePorPagina);
							let restoAux = ((this.pagingActual.count) % this.detallePorPagina);
							if (restoAux == 0) {
								this.totalPage = auxP;
							} else {
								this.totalPage = auxP + 1;
							}
							if (data.hasOwnProperty('next_page')) {
								if (data.next_page == null || data.next_page == undefined || data.next_page == "") {
									this.pagingActual.next_page = null;
								} else {
									this.pagingActual.next_page = data.next_page;
								}
							} else {
								this.pagingActual.next_page = null;
							}
							if (data.hasOwnProperty('previous_page')) {
								if (data.previous_page == null || data.previous_page == undefined || data.previous_page == "") {
									this.pagingActual.previous_page = null;
								} else {
									this.pagingActual.previous_page = data.previous_page;
								}
							} else {
								this.pagingActual.previous_page = null;
							}
							if (data.hasOwnProperty('first_page')) {
								if (data.first_page == null || data.first_page == undefined || data.first_page == "") {
									this.pagingActual.first_page = null;
								} else {
									this.pagingActual.first_page = data.first_page;
								}
							} else {
								this.pagingActual.first_page = null;
							}
							if (data.hasOwnProperty('last_page')) {
								if (data.last_page == null || data.last_page == undefined || data.last_page == "") {
									this.pagingActual.last_page = null;
								} else {
									this.pagingActual.last_page = data.last_page;
								}
							} else {
								this.pagingActual.last_page = null;
							}
							if (data.hasOwnProperty(key)) {
								var objeto = {};
								this.listRegister = [];
								for (var i = 0; i < data[key].length; i++) {
									objeto = this.formattedData(data[key][i]);
									if (objeto != null) {
										this.listRegister.push(data[key][i]);
									}

								}
								this.pagingActual.count = data.count;
							}else{
								this.listRegister=[];
							}
						}
					}else{
						this.listRegister=[];
					}
				}else{
					this.mensaje=this.service.processMessageError(data,mensajeAll);
					this.msg.error();
				}
			}
		},err=>{
			this.listRegister=[];
			this.mensaje=this.service.processError(err,mensajeAll);
			this.msg.error();
		});
	}
	app.AppReportComponent.prototype.formattedData=function(data){
		if(data==null || data==undefined || data==""){
			return null;
		}else{
			if(data.hasOwnProperty("screenshots")){
				for(var i=0; i<data.screenshots.length; ++i){
					data.screenshots[i] = getStatic() + data.screenshots[i];
				}
			}
			if(data.hasOwnProperty("brief_description")){
				data.brief_description=data.brief_description;
			}
			if(data.hasOwnProperty("business_id")){
				data.business_id=data.business_id;
			}
			if(data.hasOwnProperty("category")){
				data.category=data.category;
			}
			if(data.hasOwnProperty("developer")){
				data.developer=data.developer;
			}
			if(data.hasOwnProperty("full_description")){
				data.full_description=data.full_description;
			}
			if(data.hasOwnProperty("icon")){
				data.icon=getStatic() + data.icon;
			}
			if(data.hasOwnProperty("id")){
				data.id=data.id;
			}
			if(data.hasOwnProperty("info")){
				data.date_created_at= formattingDate(data.info.created_at);
			}
			if(data.hasOwnProperty("name")){
				data.name= data.name;
			}
			if(data.hasOwnProperty("package_name")){
				data.package_name= data.package_name;
			}
			if(data.hasOwnProperty("platform")){
				data.platform= data.platform;
			}
			if(data.hasOwnProperty("status")){
				if (data.status == "ACTIVE") {
					data.status= "ACTIVO";
				}else{
					data.status= "INACTIVO";
				}
			}
			data.actions=[];
			if(this.checkAction("APP-VIEW")!=null){
				data.actions.push(this.checkAction("APP-VIEW"));
			}
			if(this.checkAction("APP-UPDATE")!=null){
				data.actions.push(this.checkAction("APP-UPDATE"));
			}
			if(this.checkAction("VERSION-VIEW")!=null){
				data.actions.push(this.checkAction("VERSION-VIEW"));
			}
			if(this.checkAction("APP-DELETE")!=null){
				data.actions.push(this.checkAction("APP-DELETE"));
			}
			if(this.checkAction("UPLOAD-VERSION")!=null){
				data.actions.push(this.checkAction("UPLOAD-VERSION"));
			}
			if(this.checkAction("APP-INACTIVE")!=null && data.status == "ACTIVO"){
				data.actions.push(this.checkAction("APP-INACTIVE"));
			}
			if(this.checkAction("APP-ACTIVE")!=null && data.status == "INACTIVO"){
				data.actions.push(this.checkAction("APP-ACTIVE"));
			}
			return data;
		}
	}
	app.AppReportComponent.prototype.deselectedData=function(data){
		this.dataSelected=null;
	}
	app.AppReportComponent.prototype.checkAction=function(data){
		if(this.actions==null || this.actions==undefined || this.actions.length==0){
			return null;
		}else{
			for(var i=0;i<this.actions.length;i++){
				if(this.actions[i]!=null){
					if(this.actions[i].name==data){
						return this.actions[i];
						break;
					}
				}
			}
			return null;
		}
	}
	app.AppReportComponent.prototype.selectedAction=function(data,action){
		this.dataSelected = data;
		this.dataSelected2 = data;
		if (action.hasOwnProperty('name')) {
			switch (action.name) {
				case 'APP-VIEW':{
					this.router.navigate(['/app-view'], { queryParams: { id: data.id} });
				}break;
				case 'UPLOAD-VERSION':{
					this.router.navigate(['/upload-version'], { queryParams: { id: data.id} });
				}break;
				case 'VERSION-VIEW':{
					this.router.navigate(['/version-view'], { queryParams: { id: data.id} });
				}break;
				case 'APP-UPDATE':{
					this.router.navigate(['/app-update'], { queryParams: { id: data.id} });
				}break;
				case 'APP-DELETE':{
					$("#modalDeleteApp").modal("show");
				}break;
				case 'APP-ACTIVE':{
					$("#modalActivateApp").modal("show");
				}break;
				case 'APP-INACTIVE':{
					$("#modalDesactivateApp").modal("show");
				}break;
				default:{}
			}
		}
	}
	app.AppReportComponent.prototype.activateApp=function(){
		$("#modalActivateApp").modal('hide');
		if(this.dataSelected==null || this.dataSelected==undefined || this.dataSelected==""){
			this.mensaje=_("warning5");
			this.msg.warning();
			return;
		}else{
			if(this.dataSelected.hasOwnProperty("id")){
				if(!(this.dataSelected.id==null || this.dataSelected.id==undefined || this.dataSelected.id=="")){
					var querys="&id="+this.dataSelected.id;
					this.dataSelected2.status = 'ACTIVE';
					var params = this.dataSelected2;
					let mensajeAll = _("message_dflt_34");
					let request = this.service.callServicesHttp("edit-app", querys, params);
					request.subscribe(data => {
						if (data == null || data == undefined || data == "") {
							this.mensaje = mensajeAll;
							this.msg.error();
						} else {
							if (data.status_http == 200) {
								delete data['status_http'];
								this.ngOnInit();
								this.mensaje=_("success23");
								this.msg.info();
							} else {
								this.mensaje = this.service.processMessageError(data, mensajeAll);
								this.msg.error();
							}
						}
					}, err => {
						this.mensaje = this.service.processError(err, mensajeAll);
						this.msg.error();
					}
					);
				}
			}
		}
	}
	app.AppReportComponent.prototype.desactivateApp=function(){
		$("#modalDesactivateApp").modal('hide');
		if(this.dataSelected==null || this.dataSelected==undefined || this.dataSelected==""){
			this.mensaje=_("warning6");
			this.msg.warning();
			return;
		}else{
			if(this.dataSelected.hasOwnProperty("id")){
				if(!(this.dataSelected.id==null || this.dataSelected.id==undefined || this.dataSelected.id=="")){
					var querys="&id="+this.dataSelected.id;
					this.dataSelected2.status = 'INACTIVE';
					var params = this.dataSelected2;
					let mensajeAll = _("message_dflt_35");
					let request = this.service.callServicesHttp("edit-app", querys, params);
					request.subscribe(data => {
						if (data == null || data == undefined || data == "") {
							this.mensaje = mensajeAll;
							this.msg.error();
						} else {
							if (data.status_http == 200) {
								this.mensaje=null
								delete data['status_http'];
								this.ngOnInit();
								this.mensaje=_("success24");
								this.msg.info();
							} else {
								this.mensaje=null
								this.mensaje = this.service.processMessageError(data, mensajeAll);
								this.msg.error();
							}
						}
					}, err => {
						this.mensaje=null
						this.mensaje = this.service.processError(err, mensajeAll);
						this.msg.error();
					}
					);
				}
			}
		}
	}
	app.AppReportComponent.prototype.deleteData=function(){
		$("#modalDeleteApp").modal('hide');
		if(this.dataSelected==null || this.dataSelected==undefined || this.dataSelected==""){
			this.mensaje=null
			this.mensaje=_("warning19");
			this.msg.warning();
			return;
		}else{
		  	let querys="";
			querys="&id="+this.dataSelected.id;
			this.mensaje=null
			let mensajeAll =capitalizeOnly(_("message_dflt_32"));
			let request = this.service.callServicesHttp("delete-app", querys, null);
			request.subscribe(data => {
				if (data == null || data == undefined || data == "") {
					this.mensaje=null
					this.mensaje = mensajeAll;
					this.msg.error();
				} else {
					if (data.status_http == 200) {
						delete data['status_http'];
						this.ngOnInit();
						this.mensaje=null
						this.mensaje=capitalizeOnly(_("success21"));
						this.msg.info();
						setTimeout(() => {
							this.search();
						}, 1000);
					} else {
						this.mensaje=null
						this.mensaje = this.service.processMessageError(data, mensajeAll);
						this.msg.error();
					}
				}
			}, err => {
				this.mensaje=null
				this.mensaje = this.service.processError(err, mensajeAll);
				this.msg.error();
			});
		}
	}
})(window.app || (window.app = {}));
