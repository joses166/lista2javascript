function f1(v){
	v[0] = parseInt(prompt("Informe o numero"));	
}
function f2(v){
	if(v[0] < 0){
		alert("Numero é menor que zero!");
	}else if(v[0] >= 0){
		v[1] = 1;
		for(var i = 1; i <= v[0];i++){
			v[1] = i * v[1];
		}
	}
}
function f3(v){
	alert("Fatorial de: " + v[0] + "! = " + v[1]);
}