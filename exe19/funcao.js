function f1(v1, v2){
	v1.push(parseInt(prompt("Informe o numero vetor 1")));
	v2.push(parseInt(prompt("Informe o numero vetor 2")));
}
function f2(v1, v2, v3){
	for(var i = 0; i < v1.length; i++){
		for(var j = 0; j < v1.length;j++){
			if(v1[i] == v2[j]){
				v3.push(v1[i]);
			}
		}
	}
}
function f3(v3){
	alert("Vetor: " + v3);
}