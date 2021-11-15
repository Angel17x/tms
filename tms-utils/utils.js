function returnLogsPermitidos(){
	var data=[
		{value:"SECURITY_QUESTIONS_CHANGED",name:"Preguntas de seguridad cambiadas"},
		{value:"PASSWORD_CHANGED",name:"Preguntas de seguridad cambiadas"},
		{value:"USER_PASSWORD_CHANGED_BY_SYSTEM",name:"Contraseña cambiada por sistema"},
		{value:"CHANGE_EXPIRED_PASSWORD",name:"Contraseña cambiada por expiración"},
		{value:"RECOVER_PASSWORD",name:"Contraseña recuperada"},
		{value:"SCOPE_CREATED",name:"Rol creado"},
		{value:"SCOPE_UPDATED",name:"Rol actualizado"},
		{value:"SCOPE_DELETED",name:"Rol borrado"},
		{value:"ROLE_CREATED",name:"Asignación de rol creada"},
		{value:"ROLE_UPDATED",name:"Asignación de rol actualizado"},
		{value:"USER_BLOCKED",name:"Usuario bloqueado"},
		{value:"USER_UNBLOCKED",name:"Usuario desbloqueado"},
		{value:"USER_DELETED",name:"Usuario eliminado"},
		
		{value:"ERROR",name:"Error"},
		{value:"SESSION_REVOKED",name:"Sesión revocada"},
		
		{value:"USER_ACTIVATED_FROM_SYSTEM",name:"Usuario activado desde system"},
		{value:"USER_ACTIVATED",name:"Usuario activado"},
		{value:"USER_DATA_CHANGED",name:"Datos de usuario cambiados"},
		{value:"FAILED_TO_GET_USD_EXCHANGE_RATE",name:"Falla al obtener tasa de cambio"},
		{value:"BANK_CREATED",name:"Banco creado"},
		{value:"BANK_DELETED",name:"Banco borrado"},
		{value:"COLLECT_METHOD_CREATED",name:"Método de adquiriencia creado"},
		{value:"COLLECT_METHOD_UPDATED",name:"Método de adquiriencia actualizado"},
		{value:"COLLECT_METHOD_ALLOWED",name:"Método de adquriencia permitido"},
		{value:"COLLECT_METHOD_UNALLOWED",name:"Método de adquiriencia pausado"},
		{value:"COLLECT_METHOD_DELETED",name:"Método de adquiriencia borrado"},
		{value:"COLLECT_METHOD_RULE_UPDATED",name:"Método de adquiriencia reglas actualizadas"},
		{value:"COLLECT_METHOD_RULES_CREATED",name:"Método de adquiriencia reglas creadas"},
		{value:"COLLECT_METHOD_RULES_DELETED",name:"Método de adquriencia reglas borrados"},
		{value:"BANK_UPDATED",name:"Banco actualizado"},
		{value:"BANK_BIN_CREATED",name:"Bin creado"},
		{value:"BANK_BIN_UPDATED",name:"Bin actualizado"},
		{value:"BANK_BIN_DELETED",name:"Bin borrado"},
		{value:"FINANCIAL_CARD_EMITTER_CREATED",name:"Emisor creado"},
		{value:"FINANCIAL_CARD_EMITTER_UPDATED",name:"Emisor actualizado"},
		{value:"FINANCIAL_CARD_EMITTER_DELETED",name:"Emisor borrado"},
		{value:"AFFILIATION_PETITION_CREATED",name:"Afiliación creada"},
		{value:"AFFILIATION_PETITION_DELETED",name:"Afiliación borrada"},
		{value:"AFFILIATION_PETITION_APPROVED",name:"Afiliación aprobada"},
		{value:"AFFILIATION_PETITION_IN_PROCESS",name:"Afiliación en proceso"},
		{value:"AFFILIATION_PETITION_REJECTED",name:"Afiliación rechazada"},
		{value:"AFFILIATION_PETITION_SUSPENDED",name:"Afiliación suspendida"},
		{value:"AFFILIATION_PETITION_REVOKED",name:"Afiliación revocada"},
		{value:"AFFILIATION_PETITION_ACTIVATED",name:"Afiliación activada"},
		{value:"AFFILIATION_PETITION_REACTIVATED",name:"Afiliación reactivada"},
		{value:"TMS_SELLER_CREATED",name:"Canal de ventas creado"},
		{value:"TMS_SELLER_ADD_BANK",name:"Banco adicionado a canal de ventas"},
		{value:"TMS_SELLER_REMOVE_BANK",name:"Banco removido de canal de ventas"},
		{value:"TMS_DEVICE_TEMPLATE_CONFIG_CREATED",name:"Plantilla de configuración creada"},
		{value:"TMS_SELLER_DEACTIVATE_BANK",name:"Banco desactivado de canal de ventas"},
		{value:"TMS_SELLER_DELETED",name:"Canal de ventas borrado"},
		{value:"TMS_SELLER_ACTIVATE_BANK",name:"Banco activado en canal de ventas"},
		{value:"TMS_DEVICE_TEMPLATE_CONFIG_UPDATED",name:"Plantilla de configuración actualizada"},
		{value:"TMS_DEVICE_TEMPLATE_CONFIG_DELETED",name:"Plantilla de configuración borrada"},
		
		{value:"EMV_PRODUCT_DELETED",name:"Producto EMV eliminado"},
		{value:"EMV_PRODUCT_UPDATED",name:"Producto EMV actualizado"},
		{value:"EMV_PRODUCT_CREATED",name:"Producto EMV creado"},
		
	];
	data.sort((a, b) => a.name.localeCompare(b.name));
	return data;
}
function returnLogsNoPermitidos(){
	var data=[
	'MOVISTAR_SALES_ORDER_UPDATED','MOVISTAR_SALES_ORDER_DELETED','MOVISTAR_SALES_ORDER_CONFIRMED','MOVISTAR_SALES_ORDER_CANCELED','MOVISTAR_SALES_ORDER_DELIVERED',
	'MOVISTAR_SALES_ORDER_PAID','MOVISTAR_SALES_ORDER_PAYMENTS_ADDED','MOVISTAR_SALES_ORDER_PAYMENTS_DELETED','MOVISTAR_SALES_ORDER_PAYMENTS_VALIDATED','MOVISTAR_SALES_ORDER_ITEMS_UPDATED','MOVISTAR_SALES_PUBLICATION_CREATED','MOVISTAR_SALES_PUBLICATION_UPDATED','MOVISTAR_SALES_PUBLICATION_DELETED','MOVISTAR_SALES_ORDER_CREATED','MOVISTAR_SALES_PRODUCT_DELETED','MOVISTAR_SALES_PRODUCT_UPDATED','MOVISTAR_SALES_PRODUCT_CREATED','API_RESOURCE_CREATED','USER_IMAGE_DELETED',"PROFILE_DELETED","USER_CONFIGURATION_DELETED","ROLE_DELETED","SESSION_CLOSED","AUTH_DEVICE_LOCKED","AUTH_DEVICE_UNLOCKED","AUTH_DEVICE_DELETED","AUTH_DEVICE_PROPERTIES_CHANGED",'API_RESOURCE_UPDATED','API_RESOURCE_DELETED','INTEGRATION_PAYMENT_CREDENTIALS_CLIENT_SECRET_CHANGED',
		'INTEGRATION_PAYMENT_CREDENTIALS_CREATED',
		'INTEGRATION_PAYMENT_CREDENTIALS_UPDATED',
		'INTEGRATION_PAYMENT_CREDENTIALS_DELETED',
		'DELETE_USER_TASK',
		'APP_VIEW_CREATED',
		'APP_VIEW_UPDATED',
		'APP_VIEW_DELETED',
		'BANK_PROFILE_CREATED',
		'BANK_PROFILE_DELETED',
        'USER_OPERATION_SETTINGS_CREATED',
        'BANK_ACCOUNT_CREATED',
        'BANK_ACCOUNT_DELETED',
        'USER_OPERATION_SETTINGS_UPDATED',
        'USER_OPERATION_SETTINGS_DELETED',
		'PAYMENT_METHOD_CREATED',
        'PAYMENT_METHOD_DELETED',
       
        'WALLET_STORE_CREATED',
        'WALLET_STORE_UPDATED',
        'WALLET_STORE_DELETED',
        'WALLET_DEVICE_REMOVED_FROM_STORE',
        'WALLET_DEVICE_ADDED_TO_STORE',
        'WALLET_DEVICE_CREATED',
        'WALLET_DEVICE_UPDATED',
        'WALLET_DEVICE_DELETED',
        'WALLET_DEVICE_AFFILIATION_ASSIGNED',
        'WALLET_DEVICE_SELLER_ASSIGNED',
        'WALLET_DEVICE_COMMERCE_ASSIGNED',
        'WALLET_DEVICE_BANK_ASSIGNED',
        'WALLET_DEVICE_AFFILIATION_UNASSIGNED',
        'WALLET_DEVICE_DUKPT_LOADED',
        'WALLET_DEVICE_MKSK_LOADED',
        'WALLET_USER_CREATED',
        'WALLET_USER_UPDATED',
        'WALLET_USER_DELETED',
        'WALLET_USER_ADDED_TO_STORE',
        'WALLET_USER_REMOVED_FROM_STORE',
        'FORM_PAYMENT_CREATED',
        'FORM_PAYMENT_UPDATED',
        'FORM_PAYMENT_DELETED',
        'OPERATION_REQUEST_CONFIG_CREATED',
        'OPERATION_REQUEST_CONFIG_UPDATED',
        'OPERATION_REQUEST_CONFIG_DELETED',
        'OPERATION_REQUEST_APPROVED',
        'STATIC_IMAGE_CREATED',
        'STATIC_IMAGE_DELETED',
		'SERVICE_PAY_PRODUCT_CREATED',
        'SERVICE_PAY_PRODUCT_UPDATED',
        'SERVICE_PAY_PRODUCT_DELETED',
        'SERVICE_PAY_ALLY_CREATED',
        'SERVICE_PAY_ALLY_STATUS_CHANGED',
        'SERVICE_PAY_ALLY_DELETED',
        'SERVICE_PAY_INVENTORY_CREATED',
        'SERVICE_PAY_INVENTORY_UPDATED',
        'SERVICE_PAY_INVENTORY_BALANCE_ADDED',
        'SERVICE_PAY_INVENTORY_BALANCE_SUBTRACT',
        'SERVICE_PAY_INVENTORY_DELETED',
        'SERVICE_PAY_INVENTORY_MOVEMENT_CREATED',
        'SERVICE_PAY_INVENTORY_TEMPLATE_CREATED',
        'SERVICE_PAY_INVENTORY_TEMPLATE_UPDATED',
        'SERVICE_PAY_INVENTORY_TEMPLATE_DELETED',
        'SERVICE_PAY_SALE_ORDER_CREATED',
        'SERVICE_PAY_SALE_ORDER_UPDATED',
        'SERVICE_PAY_SALE_ORDER_DELETED',
        'OPERATION_REQUEST_DELETED',
        'OPERATION_REQUEST_CREATED',
        'SERVICE_PAY_SALE_ORDER_PAYMENT_REMOVED',
        'ISSUE_CREATED',
        'ISSUE_UPDATED',
        'ISSUE_DELETED',
        'ISSUE_CLOSED',
        'ISSUE_ASSIGNED',
        'ISSUE_UNASSIGNED',
        'CREDICARD_AFFILIATIONS_FILE_READ',
        'SERVICE_PAY_TRANSACTION_CREATED',
        'SERVICE_PAY_TRANSACTION_CANCELED',
        'BANK_STATEMENT_CREATED',
        'BANK_STATEMENT_UPDATED',
        'BANK_STATEMENT_DELETED',
        'BANK_STATEMENT_DETAIL_AUTHORIZED',
        'MOVISTAR_PPVV_CREATED',
        'MOVISTAR_PPVV_UPDATED',
        'MOVISTAR_PPVV_DELETED',
        'MOVISTAR_PPVV_OFFICE_CREATED',
        'MOVISTAR_PPVV_OFFICE_UPDATED',
        'MOVISTAR_PPVV_OFFICE_DELETED',
		"SECURITY_QUESTIONS_CHANGED","SESSION_EXPIRED","TELEGRAM_CHAT_CREATED","TELEGRAM_CHAT_DELETED","AUTHORIZE_AUTH_DEVICE","AUTHORIZE_AUTH_DEVICE_WITH_TOKEN"
	];
	return data;
}
function returnBanks(){
	return [
		{bank_code:"0137",acronym:"SOFITASA",name:"Banco sofitasa"},
		{bank_code:"0128",acronym:"CARONI",name:"Banco Caroni"},
		{bank_code:"0134",acronym:"BANESCO",name:" Banesco banco universal s.a"},
		{bank_code:"0138",acronym:"BANCO_PLAZA",name:"Banco Plaza"},
		{bank_code:"0146",acronym:"BANGENTE",name:"Banco de la gente emprendedora"},
		{bank_code:"0151",acronym:"BFC",name:"Banco fondo común c.a."},
		{bank_code:"0156",acronym:"BANCO100",name:"100% banco, banco universal "},
		{bank_code:"0157",acronym:"DELSUR",name:"Delsur banco universal"},
		
		{bank_code:"0163",acronym:"TESORO",name:"Banco del tesoro"},
		{bank_code:"0166",acronym:"BAV",name:"Banco agrícola de venezuela"},
		{bank_code:"0168",acronym:"BANCRECER",name:"Bancrecer"},
		{bank_code:"0169",acronym:"MIBANCO",name:"Mi banco"},
		{bank_code:"0171",acronym:"ACTIVO",name:"Banco activo"},
		{bank_code:"0102",acronym:"BDV",name:"Banco de venezuela"},
		{bank_code:"0104",acronym:"BVC",name:"Venezolano de crédito"},
		{bank_code:"0105",acronym:"MERCANTIL",name:"Banco mercantil"},
		
		{bank_code:"0108",acronym:"BBVA",name:"Banco provincial"},
		{bank_code:"0114",acronym:"BANCARIBE",name:"Bancaribe c.a. banco universal"},
		{bank_code:"0115",acronym:"EXTERIOR",name:"Banco exterior"},
		{bank_code:"0137",acronym:"SOFITASA",name:"Banco sofitasa"},
		{bank_code:"0191",acronym:"BNC",name:"Banco nacional de crédito"},
		{bank_code:"0172",acronym:"BANCAMIGA",name:"Bancamiga"},
		{bank_code:"0174",acronym:"BANPLUS",name:"Banplus"},
		{bank_code:"0175",acronym:"BICENTENARIO",name:"Banco bicentenario"},
		
		{bank_code:"0177",acronym:"BANFANB",name:"Banco de la fuerza armada nacional bolivariana"}
	];
}
function orderList(lista){
	if(lista==null || lista==undefined || lista.length==0){
		return null;
	}else{
		var n=lista.length;
		var n, i, k, aux;
		for (k = 1; k < n; k++) {
			for (i = 0; i < (n - k); i++) {
				if (lista[i].sort > lista[i + 1].sort) {
					aux = lista[i];
					lista[i] = lista[i + 1];
					lista[i + 1] = aux;
				}
			}
		}
		return lista;
	}						
}
function verifyFieldsNumeric(evt){
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		  return false;
	}
	return true;
}
function returnModels(){
	return ["QPOS MINI","A80","A90"];
}
function returnBrands(){
	return ["DSPREAD","AISINO"];
}
function returnUrls(){
	return ["images/tms/qpos-mini.png",
	"images/tms/aisino_a80.png",
	"images/tms/aisino_a90.png",]
}
function verifyExtension(data) {
	var fname = data;
	var re = /^(.+)\/([^\/]+(png|PNG|gif|GIF|jp[e]?g|JP[E]?G))$/gi;
	if (re.test(fname)) {
		return true
	}else{
		return false
	}
}
function capitalizeOnly(data) {
  if (data == null || data == undefined) {
    return "";
  } else {
    var aux = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return aux;
  }
};
function formattingDate(date) {
	date = replaceAll(date, "T", " ");
	var newDate = new Date(date);
	var hora = "00";
	var minutos = "00";
	if (newDate.getHours() < 10) {
		hora = "0" + newDate.getHours();
	} else {
		hora = newDate.getHours();
	}
	if (newDate.getMinutes() < 10) {
		minutos = "0" + newDate.getMinutes();
	} else {
		minutos = newDate.getMinutes();
	}
	var dia = newDate.getDate();
	if (dia < 10) {
		dia = "0" + newDate.getDate();
	}
	var mes=newDate.getMonth() + 1;
	if (mes < 10) {
		mes = "0" + mes;
	}
	var dateFormatting = dia + '-' + mes + '-' + newDate.getFullYear() + ' ' + hora + ':' + minutos;
	return dateFormatting;
}
function replaceAll(text, busca, reemplaza) {
  if (text == null || text == undefined) {
    return text;
  } else {
    while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca, reemplaza);
    return text;
  }
}
function utils_keyNumber(data) {
	var patron = /^[0-9]*$/;
	if (patron.test(data))
	    return true;
	  else
	    return false;
}
function utils_Version(data) {
	var patron = /^[1-9][0-9]?\.[1-9]?[0-9]\.[1-9]?[0-9]$/;
	if (patron.test(data))
	    return true;
	  else
	    return false;
}
function getTimeZone(){
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function validarRutaAbsoluta(data){
	var patron = new RegExp('^(?:[a-z]+:)?//', 'i');
	if (patron.test(data))
	   return true;
	else
	   return false;
}
function verifyFieldsPackage(evt){
	var regEx = /^[a-zA-Z0-9.]+$/;
	  if(evt.key.match(regEx)){
		  return true;
	  }
	  else{
		  return false;
	  }
}
//2. keypress: valida que solo acepte numeros y letras, comas y puntos, borrado y guion
function keyPressValidarLetrasNumerosSimplesGuionesPisos(event) {
  var key = event.keyCode || event.which;
  var tecla = String.fromCharCode(key).toLowerCase();
  var letras = "abcdefghijklmnopqrstuvwxyz0123456789";
  var especiales = [8, 45, 95];
  var tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial)
    return false;
}
//3. valida que la cadena pasada solo contenga letras simples mayusculas y minusculas, numeros, guiones y pisos bajo
function validarLetrasNumerosSimplesGuionesPiso(data) {
  var patron = /^([a-zA-Z-Z]|[0-9]|-|_)*$/;
  if (patron.test(data))
    return true;
  else
    return false;
}
function formattingIntegerPart(integerPart) {
  var auxCaracter = "";
  var isNegative = false;
  auxCaracter = integerPart.charAt(0);
  var enteroAux = integerPart;
  if (auxCaracter == '-') {
    integerPart = integerPart.substring(1, integerPart.length);
    isNegative = true;
    isNegative = true;
  }
  var cadena = '';
  var posicion = 0;
  if (integerPart.length > 3) {
    for (var i = 0; i < integerPart.length; i++) {
      if (i == 0) {
        posicion = integerPart.length;
      }
      if (posicion <= 3) {
        cadena = integerPart.substring(0, posicion) + cadena;
        if (isNegative) {
          cadena = '-' + cadena;
        }
        return cadena;
      } else {
        cadena = '.' + integerPart.substring(posicion - 3, posicion) + cadena;
        posicion = posicion - 3;
      }
    }
  } else {
    cadena = integerPart;
  }
  if (isNegative) {
    cadena = '-' + cadena;
  }
  return cadena;
}
function amountFormattingObject(amount) {
  var retorno = {
    integerPart: '',
    decimalPart: ''
  };
  var monto = (amount / 100).toFixed(2);
  var parteDecimal = '';
  var parteEntera = '';
  if (monto.toString().indexOf('.') > 0) {
    var array = monto.toString().split('.');
    parteEntera = array[0];
    if (array[1].length < 2) {
      parteDecimal = array[1] + '0';
    } else {
      parteDecimal = array[1];
    }
  } else {
    parteEntera = monto.toString();
    parteDecimal = '00';
  }
  retorno.integerPart = formattingIntegerPart(parteEntera);
  retorno.decimalPart = parteDecimal;
  return retorno;
}