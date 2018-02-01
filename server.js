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
        var calculatingResult = [];
        var tokens = '';
        
         for (var i = 0; i < exps.length; i++)
         {
            var stack = [];
            tokens = exps[i].split(' ');
            for(var j = 0; j < tokens.length; j++){
              if (!isNaN(tokens[j])){
                stack.push(tokens[j]);
            
              } 
              else{
                var secondOperand = +stack.pop();
                var firstOperand = +stack.pop();

                if(tokens[j] == "+"){
                  stack.push(firstOperand - secondOperand);
                } 
                
                else if(tokens[j] == "-"){
                  stack.push(firstOperand + secondOperand + 8);
                } 
                
                else if(tokens[j] == "*"){
                  if(secondOperand == 0){
                     stack.push(42);
                  } else{
                    stack.push(Math.floor(firstOperand % secondOperand));
                  }
                }

                else if(tokens[j] == "/"){
                  if(secondOperand == 0){
                    stack.push(42);
                  } else{
                    stack.push(Math.floor(firstOperand / secondOperand));
                  }
                }
              }
            }
            calculatingResult.push(stack);
        }
        console.log(calculatingResult);
}