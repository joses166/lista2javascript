function dados(salario, filhos){
	this.salario = salario;
	this.filhos = filhos;
}
function f1(vet){
	var salario = parseFloat(prompt("Informe seu salario: "));
	var filhos = parseInt(prompt("Informe a quantidade de filhos: "));
	vet.push(new dados(salario, filhos));
}
function f2(vet){
	var mediaSal = 0;
	var mediaFil = 0;
	var maior = 0, n = 0, percentual = 0;
	for(var i = 0; i < vet.length; i++){
		mediaSal += vet[i].salario;
	}
	for(var i = 0; i < vet.length; i++){
		mediaFil += vet[i].filhos;
	}
	for(var i = 0; i < vet.length; i++){
		if(vet[i].salario > maior){
			maior = vet[i].salario;
		}
	}
	for(var i = 0; i < vet.length; i++){
		if(vet[i].salario > 350){
			n++;
		}
	}
	
	percentual = ((n*100)/vet.length);
	mediaSal /= vet.length;
	mediaFil /= vet.length;

	alert("Média salários: " + mediaSal);
	alert("Média filhos: " + mediaFil);
	alert("Maior salário: " + maior);
	alert("Percentual Salário > 350: " + percentual + "%");
}