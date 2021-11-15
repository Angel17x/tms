var domain="demo.paguetodo.com";
var base="https://"+domain+"/";
function baseApp(){
	return base;
}
function getDomain(){
	return domain;
}
function doLogout(){
	localStorage.clear();
	sessionStorage.clear();
}
function getClient(){
	return 'ce2a8eac-80e7-46d8-bd6c-3d6d8bfed80b';
}
function getApi(){
	return "https://apid.paguetodo.com/demo/";
}
function getEnlaceAuth(){
	return "deegle_auth";
}
function getEnlaceApi(){
	return "deeglev2";
}
function getEnlaceApi2(){ //Enlace_api
	return "deeglev2";
}
function getEnlaceApiOld(){
	return "deegle";
}
function getStatic(){
	return "https://staticd.paguetodo.com/"
}
function redirectUri(){
	return base+"login/";
}
function getLoginUri(){
	return base+"login/";
}
function enabledProd(){
	return false;
}