/*
Ryan Huffman
CS81, Section 1231
Summer 2016
Assignment 10, Exercise 7.22
7/18/16
*/

var reversal = function(inputString){
	var initialArray = inputString.split("");
	var finalArray = [];
	for(var i = 0; i < initialArray.length; i++){
		finalArray.push(initialArray[initialArray.length - i - 1]);
	}
	
	return finalArray.join("");
}

document.getElementById("btnReverse").onclick = function () {
	var originalString = document.getElementById("inputString").value;
    document.getElementById("inputString").value = reversal(originalString);
};