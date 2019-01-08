var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback) {

	fs.readdir(dirName, function(err, data) {
		if(err) {
			return callback(err,null)
		}

		var files = data.filter(function(file) {
			if(path.extname(file) === '.'+fileExt){
				return file;
			}
		})
		callback(null, files)
	});
}