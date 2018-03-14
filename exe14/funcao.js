function f1(vet){
	var n = parseInt(prompt("Informe o numero: "));
	vet.push(n);
}
function f2(vet,par,impar){
	for(var i=0; i<vet.length; i++){
		if (vet[i] % 2 == 0) {
			par.push(vet[i]);
		} else {
			impar.push(vet[i]);
		}
	}
}
function f3(par,impar){
	alert("Vetor a (Par): " + par + "\nVetor b (Impar): " + impar);
}