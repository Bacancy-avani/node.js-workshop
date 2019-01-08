

   var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }


/*var bl = require('bl');
var http = require('http');

for(let i = 2; i < process.argv.length; i++){
	http.get(process.argv[i], function(res) {
		res.pipe(bl(function(err, data) {
			console.log(data.toString())
		}))
	}).on('error', function(e) {
  		console.log("Got error: " + e.message);
	});	
}*/