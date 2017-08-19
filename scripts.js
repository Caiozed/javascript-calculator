var expression = "";
var result_header;

function AddCharacter(char){
	result_header = document.querySelector("#result");
  expression += char;
  result_header.innerHTML = expression;
}

function Clear(){
 result_header.innerHTML = "0"
 expression = "";
}

function Result(){
	if(expression != null){
 		result_header.innerHTML = eval(expression);
 	}
}




