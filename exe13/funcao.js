function dados(idade, sexo, salario, filhos){
	this.idade = idade;
	this.sexo = sexo;
	this.salario = salario;
	this.filhos = filhos;
}
function f1(vet){
	var idade = parseInt(prompt("Informe sua idade: "));
	var sexo = (prompt("Informe seu sexo(m - masculino || f - feminino): ").toUpperCase());
	var salario = parseFloat(prompt("Informe seu salario: "));
	var filhos = parseInt(prompt("Informe a quantidade de filhos: "));

	vet.push(new dados(idade, sexo, salario, filhos));
}
function f2(vet){
	var soma=0; var media;
	for(var i=0; i<vet.length; i++){
		soma = soma + vet[i].salario;
	}
	media = soma / vet.length;
	alert("A média é: " + media);
}
function f3(vet){
	var maior = vet[0].idade;
	var menor = vet[0].idade;
	for(var i=0; i<vet.length; i++){
		if(vetor[i].idade > maior){
			maior = vet[i].idade;
		}
		if(vetor[i].idade < menor){
			menor = vet[i].idade;
		}
	}
	alert("Maior idade: " + maior + "\nMenor idade: " + menor);
}
function f4(vet){
	var quanti = 0;
	for(var i=0; i<vet.length; i++){
		if((vet[i].sexo == "F") && (vet[i].filhos == 3) && (vet[i].salario <= 500)){
			quanti++;
		}
	}
	alert("Quantidade de mulheres com mais de 3 filhos e salario menor que 500 é de: " + quanti);
}