/*
Ryan Huffman
CS81, Section 1231
Summer 2016
Assignment 9, Exercise 6.10
7/18/16
*/

var checkRequiredFields = function(){
	if(document.getElementById("loginName").value !== "" && 
		document.getElementById("password1").value !== "" &&
		document.getElementById("password2").value !== ""){
			if(document.getElementById("password1").value === document.getElementById("password2").value){
				document.getElementById("submit").disabled = false;
				document.getElementById("warning").innerHTML = "";
			}else{
				document.getElementById("warning").innerHTML = "The passwords do not match";
				document.getElementById("submit").disabled = true;
			}
			
	}else{
		document.getElementById("submit").disabled = true;
		document.getElementById("warning").innerHTML = "Please enter all required fields (*)";
	}
}

document.getElementById("loginName").oninput = function () {
    checkRequiredFields();
};

document.getElementById("password1").oninput = function () {
    checkRequiredFields();
};

document.getElementById("password2").oninput = function () {
    checkRequiredFields();
};