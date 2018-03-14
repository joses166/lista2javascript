function f1(v){
	v.push(parseInt(prompt("Informe o numero")));
}
function f2(v, c){
	c[0] = 0;
	var i = 0;
	for(i = 0; i < v.length; i++){
		if(v[i] % 2 == 0){
			c[0]++;
		}
	}
}
function f3(c){
	alert("Quantidade: " + c[0]);
}