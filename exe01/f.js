function f1(pn){
	pn[0] = parseInt(prompt("Informe um número: "));
}
function f2(pn){
	var i;
	pn[1] = 0;
	for(i=0;i<=pn[0];i++){
		pn[1] = pn[1] + i;
	}
}
function f3(pn){
	alert(pn[1]);
}