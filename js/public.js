function createxhr() {
	/*var xhr;
	var str = window.navigator.userAgent;
	if (str.indexOf('MSIE') > 0) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		xhr = new XMLHttpRequest();
	}
	return xhr;*/
	
	try{return new XMLHttpRequest();}catch(e){}
	try{return new ActiveXObject('Microsoft.XMLHTTP');	}catch(e){}
	alert('Çë¸ü»»ä¯ÀÀÆ÷£¡');
}

function $(id){
	return document.getElementById(id);
}