
var myModule = require('./myModule.js');

myModule(process.argv[2],process.argv[3], function(err, data) {
	if(err) {return console.log(err);}
	data.forEach(function(file) {
		console.log(file)
	})
});