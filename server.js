var axios = require('axios');

var uri = 'https://www.eliftech.com/school-task';

//Recieving a responce from server
axios.get(uri)
    .then(function (response) {
      console.log(response.data);
      var expressions = (response.data).expressions;
      var currentId = response.data.id;

      //Calculation all expressions and getting results
      var currentResults = calculateExpressions(expressions);
      console.log(currentResults);

      //Checking the results of calculations
      checkData (currentId, currentResults);
    })
    .catch(function (error) {
      console.log(error);
    });

function checkData(id, results){

// Sending results to a server
  axios.post(uri, {
    'id': id,
    'results': results
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function calculateExpressions(exps){
        var resultingArr = [];
        var tokens = '';
        
        //Loop through all sets of expressions
         for (var i = 0; i < exps.length; i++)
         {
            var stack = [];
            tokens = exps[i].split(' ');

            //Loop through all tokens(elements) of each expression
            for(var j = 0; j < tokens.length; j++){

              //Checking if the token is "number"
              //Pushing all "numbers" to stack, until get an operand
              if (!isNaN(tokens[j])){
                stack.push(tokens[j]);
              } 
              
              //When got an operand - polling two last values from stack,
              //performing calculations depending on type of token,
              //pushing back to stack
              else{

                //Getting last two values using stack rules
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
                    //Resolving JS modulo bug
                    stack.push(Math.floor(((firstOperand%secondOperand)+secondOperand)%secondOperand));
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
            //Pushing resulting vulue to array of results translating to int
            resultingArr.push(+stack);
        }
        return resultingArr;
}