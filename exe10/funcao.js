function f1(vetor){
	vetor[0] = parseInt(prompt("Informe o numero: "));
}
function f2(vetor, s){
	s[0] = 0;
	for(var c = 1; c <= vetor[0]; c++){
		s[0] = (1/c) + s[0];
	}
}
function f3(s){
	alert("Resultado: " + s[0].toFixed(2));
}