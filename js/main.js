chrome.webRequest.onBeforeRequest.addListener(function(request) {

	if (isURLRequestGA(request.url)) {
		
		var hit = hitType(request.url);
		if (isPageview(hit)) {
			console.log(hit);
		} else {
			console.log(hit);
		} // HIT_TYPE
		
	} // isURLRequestGA

}, {
	urls: ["<all_urls>"]
});