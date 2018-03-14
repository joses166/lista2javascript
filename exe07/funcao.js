function f1(vetor){
	vetor.push(parseInt(prompt("Informe o numero: ")));
}
function f2(vetor, vet){
	var c = 0, tot = 0;
	for(var i = 0; i < vetor.length; i++){
		if(vetor[i] >= 0){
			tot += vetor[i];
			c++;
		}
	}
	vet[0] = tot/c;
}
function f3(vet){
	alert("Valor: " + vet[0]);
}