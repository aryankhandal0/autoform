linebreak = document.createElement("br");
let HelloLib=function(params) {
    this.params=params;
    console.log("Hello World From The library!",this.params)
}
HelloLib.prototype.init=function () {
    Object.keys(this.params).map(function(inp){
    	if(this.params[inp].type=="inputtext"){
    		console.log(inputtext(this.params[inp].type,this.params[inp].placeholder,this.params[inp].class));
    	} else if(this.params[inp].type=="submit"){
        console.log(insbutton(this.params[inp].value,this.params[inp].class));
    	} else if(this.params[inp].type=="dropd"){
        console.log(dropdownfunc(this.params[inp].value,this.params[inp].class,this.params[inp].options))
      }
    }.bind(this))
}
function inputtext(type,placeholder,clsName){
	var element=document.createElement("INPUT");
  document.getElementsByTagName("BODY")[0].append(linebreak);
	document.body.append(element);
	element.setAttribute("type",type);
	element.setAttribute("placeholder",placeholder);
  element.className += clsName;
	return element;
}
function insbutton(value,clsName){
	var element=document.createElement("BUTTON");
  document.getElementsByTagName("BODY")[0].append(linebreak);
  var data=document.createTextNode(value);
  document.body.appendChild(element);
  element.append(data);
  element.className += clsName;
	return element;
}
function dropdownfunc(value,clsName,options){
	var element=document.createElement("SELECT");
  document.body.appendChild(linebreak);
  var data=document.createTextNode(value);
	//document.getElementsByTagName("BODY")[0].append(element);
  document.body.appendChild(element);
  element.append(data);
  element.className += clsName;
	return element;
}
