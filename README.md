# eliftech-school-test
An application that performs next steps:
•	Receiving a set of expressions from specified endpoint via REST call
•	Performing calculation of results for received set of expressions
•	Sending a correct results to specified endpoint via REST call
Please note:
•	Each expression has limited lifetime. Expression will expire in 10 seconds.

#Installing
npm install

#Specifies
Next operations are supported (result of division is integer (math.floor)):
•	“+” - this operand performs next calculation with operands:
a - b
•	“-” - performs next:
a + b + 8
•	“*” - obtains a by modulo b (division by zero should return 42):
a % b
•	“/” - performs next (division by zero should return 42):
a / b


#Exapmple of calculation
12 12 0 / 9 0 * + /
12 42 9 0 * + /
12 42 42 + /
12 0 /
42

