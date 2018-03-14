function f1(vetor){
	vetor[0] = parseInt(prompt("Informe as horas: "));
	vetor[1] = parseInt(prompt("Informe os minutos: "));
	vetor[2] = parseInt(prompt("Informe os segundos: "));
}
function f2(vetor){
	vetor[3] = (vetor[0] * 3600) + (vetor[1] * 60) + vetor[2];
}
function f3(vetor){
	alert("Em segundos: " + vetor[3]);
}