exports.handler = function(event, context, callback) {
    // Set the latest version here.
	const latestVersion = "v1.3.1";
	callback(null, {
    		headers: {
      			"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
	      		"Access-Control-Allow-Headers": "*",
    		},
    		statusCode: 200,
    		body: latestVersion,
  	});
};
