
function rend(){
	var inputField= $('#inputField');
	var renderField=$('#renderField');
	renderField.empty();
	renderTo(renderField,inputField[0].value);
	//window.UpdateMath(inputField[0].value);
	MathJax.Hub.Typeset(renderField[0]);
}
var inputField= $('#inputField');
var renderField=$('#renderField');
var renderButton=$('#renderButton');
var printButton=$("#printButton");


var isRender=false;
$("#renderButton").on('click',function(){
	if (isRender){
		renderField.hide();
		inputField.show();
		renderButton.attr('value','render');
		isRender=false;
	}
	else{
		rend();
		renderField.show();
		inputField.hide();
		renderButton.attr('value','edit');
		isRender=true;
	}
})
function parseParam(){
	var url=location.search; 
	var Request = new Object(); 
	if(url.indexOf("?")!=-1) { 
		var str = url.substr(1) //去掉?号 
		strs = str.split("&"); 
		for(var i=0;i<strs.length;i++) { 
		Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return Request;
}
printButton.on('click',function(){
	window.open('index.html?print=true');
})
var param=parseParam();
if (param['print']==='true'){
	$('header').hide();
	inputField.hide();
	rend();
}