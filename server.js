const https = require('https');

var parsedJson='';
var expressions = '';
var id = '';

https.get('https://www.eliftech.com/school-task', (res) => {
    //   console.log('statusCode:', res.statusCode);
    //   console.log('headers:', res.headers);

      res.on('data', (d) => {
        //process.stdout.write(d);
        parsedJson = JSON.parse(d);
        expressions = parsedJson.expressions;
        id = parsedJson.id;
        calculateExpressions(expressions);
        //console.log(expressions[0] + '\n\n\n' + parsedJson.expressions[0]);
      }); 
    
    }).on('error', (e) => {
      console.error(e);
    });

function calculateExpressions(exps){
        var calculatingResult = '';
        
        for (var i = 0; i < exps.length; i++)
        {
            
        }
        console.log(exps.length);
    }