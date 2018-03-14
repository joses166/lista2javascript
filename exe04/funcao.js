function f1(vetor){
	vetor[0] = parseInt(prompt("Informe o raio: "));
}
function f2(vetor){
	vetor[1] = (4/3)*Math.pow(vetor[0], 3);
}
function f3(vetor){
	alert("Volume: " + vetor[1].toFixed(2));
}