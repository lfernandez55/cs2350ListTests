
exports.get = function(request, response) {
      var url = require('url');
      var fs = require('fs');
      path = require("path");
      
      request.requrl = url.parse(request.url, true);
      var pathvar = request.requrl.pathname;
      if (pathvar === '/' || pathvar === '/home') {
            fs.readFile('index.html', function(err, contents) {
              response.write(contents);
              response.end();
              return;
            });
      } else if (pathvar === '/tests') {
         require('./controllers/tests').get(request, response);
      }
      else 
      {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Error: Path/File Not Found: ' + path + " pathvar: " + pathvar);
        return;
      } 
}



