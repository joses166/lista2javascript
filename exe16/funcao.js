function f1(v){
	v.push(parseInt(prompt("Informe o numero")));
}
function f2(v, c){
	c[0] = 0;
	var i = 0;
	for(i = 0; i < v.length; i++){
		c[0] += v[i];
	}
}
function f3(c){
	alert("Total da soma: " + c[0]);
}