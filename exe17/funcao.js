function f1(v){
	v.push(parseInt(prompt("Informe o numero")));
}
function f2(v){
	var i = 0;
	for(i = 0; i < v.length; i++){
		if(v[i] < 0){
			v[i] = 0;
		}
	}
}
function f3(v){
	alert("Vetor: " + v);
}