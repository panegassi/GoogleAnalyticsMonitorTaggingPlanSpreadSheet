var MSG_ERRORS = [];


chrome.webRequest.onCompleted.addListener(function(request) {

	if (isURLRequestGA(request.url)) {
		
		var url = request.url,
			hit = hitType(url);

		// @todo Verificar se as informações batem com as do spreadsheet e atualizar a data.			
		if (isEvent(hit)) {
			console.log(eventTemplate(url));	
		} else if (isException(hit)) {
			
		} else if (isPageview(hit)) {
			console.log(pageviewTemplate(url));
		} else if (isSocial(hit)) {

		} else {
			// timing
			
		} // HIT_TYPE
		
	} // isURLRequestGA

}, {
	urls: ["<all_urls>"]
});