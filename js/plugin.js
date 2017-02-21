var URL_COLLECT = '/collect';
var HIT_TYPE = [
	'pageview',
	'event'
];


function isURLRequestGA(url) {
	return url.indexOf(URL_COLLECT) > 0;
} // isURLRequestGA


function hitType(url) {
	
	// Implementar try catch;
	var param = getParameterByName('t', url);
	if (!param)
		return false;

	return (HIT_TYPE.indexOf(param) > -1) ? param : false;
	
} // hitType


function isPageview(t) {
	return HIT_TYPE[0] === t;
} // isPageview


function isEvent(t) {
	return HIT_TYPE[1] === t;
} // isEvent


function getParameterByName(name, url) {
	
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
		
    return (!results || !results[2]) ? false : decodeURIComponent(results[2].replace(/\+/g, " "));
	
} // getParameterByName