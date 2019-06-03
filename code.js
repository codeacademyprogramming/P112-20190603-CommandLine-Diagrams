
alert("3 reqemli iki eded daxil edin");
let num1 = prompt();
let num2 = prompt();

if((num1 > 99 && num1 < 1000) && (num2 > 99 && num2 < 1000)){
	alert("Operator daxil edin");	
	let operator = prompt();
	
	let result;

	if(operator == "+"){
		result = num1 + num2;
       } 
	else if(operator == "-"){
		result = num1 - num2;
       }
	else if(operator == "*"){
		result = num1 * num2;
       }
	else if(operator == "/"){
		result = num1 / num2;
       }
	else if(operator == "%"){
		result = num1 % num2;
       }
	
	alert(result);

   } else {
	alert("Duzgun ededler daxil etmemisiniz");
   }