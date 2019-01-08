var fs = require('fs');

	fs.readFile(process.argv[2], function(err, data) {
		if(err){ throw err;}
		let content = data.toString();
		let lines = content.split('\n');
		console.log(lines.length-1);
	});



