/*
 Ryan Huffman
 CS81, Section 1231
 Summer 2016
 Assignment 8, Exercise 6.5
 7/13/16
*/

var report = function (totalCost) {
    document.getElementById("result").innerHTML = 
		"The total cost is: $" + totalCost;
};

document.getElementById("calculate").onclick = function () {
    var originalCost = document.getElementById("originalCost").value;
	var tipRate = document.getElementById("tipRate").value / 100 + 1;
    report(originalCost*tipRate);
};