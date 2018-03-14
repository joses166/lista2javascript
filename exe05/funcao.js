function f1(vetor){
	vetor[0] = parseInt(prompt("Informe o numero: "));
}
function f2(vetor){
	if(vetor[0] >= 0){
		vetor[1] = "Positivo";
	}else{
		vetor[1] = "Negativo";
	}
}
function f3(vetor){
	alert("Valor: " + vetor[1]);
}