var http = require('http');

var balance = require('./formatBallance');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(balance.response() + balance.randomAmount() );
    res.end();

}).listen(8000);

