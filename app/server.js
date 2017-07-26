var express = require('express');
var Mocha = require('mocha');
var fs = require('fs');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

var testDir = 'app/test/';

var router = express.Router();


router.get('/test1/', function(req, res) {
    var mocha = new Mocha({reporter: 'json'});
    fs.readdirSync(testDir).filter(function(file){
        return file.substr(-3) === '.js';

    }).forEach(function(file){
        mocha.addFile(path.join(testDir, file));
    });
    var runner = mocha.run();
    runner.on('end', function () {
        res.json(runner.testResults);
    });
});


app.use('/api', router);


app.listen(port);