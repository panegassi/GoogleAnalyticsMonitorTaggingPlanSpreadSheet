var URL_COLLECT = 'google-analytics.com/collect';
var HIT_TYPE = [
	'event',
	'exception',
	'pageview',
	'social',
	'timing'
];

function isURLRequestGA(url) {
	return url.indexOf(URL_COLLECT) > 0;
} // isURLRequestGA


// @todo Implementar verificação de eventos e pageview de enhanced e-commerce
function hitType(url) {
	
	// Implementar try catch;
	var param = getParameterByName('t', url);
	if (!param)
		return false;

	return (HIT_TYPE.indexOf(param) > -1) ? param : false;
	
} // hitType


function isEvent(t) {
	return HIT_TYPE[0] === t;
} // isEvent


function isException(t) {
	return HIT_TYPE[1] === t;
} // isException


function isPageview(t) {
	return HIT_TYPE[2] === t;
} // isPageview


function isSocial(t) {
	return HIT_TYPE[3] === t;
} // isSocial


function isTiming(t) {
	return HIT_TYPE[4] === t;
} // isTiming


function eventTemplate(url) {
	
	return {
		'hitType': HIT_TYPE[0],
		'host': getHost(url),
		'path': getParameterByName('dp', url),
		'eventCategory': getParameterByName('ec', url),
		'eventAction': getParameterByName('ea', url),
		'eventLabel': getParameterByName('el', url),
		'eventValue': getParameterByName('ev', url)
	};
	
} // eventTemplate


function exceptionTemplate(url) {
	
	return {
		'hitType': HIT_TYPE[1],
		'host': getHost(url),
		'path': getParameterByName('dp', url),
		'exceptionDescription': getParameterByName('exd', url),
		'exceptionFatal': getParameterByName('exf', url)
	};
	
} // exceptionTemplate


function pageviewTemplate(url) {
	
	return {
		'hitType': HIT_TYPE[2],
		'host': getHost(url),
		'path': getParameterByName('dp', url)
	};
	
} // pageviewTemplate


function socialTemplate(url) {
	
	return {
		'hitType': HIT_TYPE[3],
		'host': getHost(url),
		'path': getParameterByName('dp', url),
		'socialNetworking': getParameterByName('sn', url),
		'socialAction': getParameterByName('sa', url),
		'socialTarget': getParameterByName('st', url)
	};
	
} // socialTemplate


function timingTemplate(url) {
	
	return {
		'hitType': HIT_TYPE[4],
		'host': getHost(url),
		'path': getParameterByName('dp', url),
		'timingCategory': getParameterByName('utc', url),
		'timingVariable': getParameterByName('utv', url),
		'timingTime': getParameterByName('utt', url),
		'timingLabel': getParameterByName('utl', url)
	};
	
} // timingTemplate


function getHost(url) {
	return (getParameterByName('dr', url)) ? getParameterByName('dr', url) : getParameterByName('dl', url);
} // getHost


function getParameterByName(name, url) {
	
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url.toLowerCase());
		
    return (!results || !results[2]) ? false : decodeURIComponent(results[2].replace(/\+/g, " ")).toLowerCase();
	
} // getParameterByName