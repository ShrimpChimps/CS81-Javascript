/*
Ryan Huffman
CS81, Section 1231
Summer 2016
Assignment 9, Exercise 6.14
7/18/16
*/

document.getElementById("name").onfocus = function () {
    document.getElementById("nameHelp").style.display = "inline";
};

document.getElementById("name").onblur = function () {
    document.getElementById("nameHelp").style.display = "none";
};

document.getElementById("occupation").onfocus = function () {
    document.getElementById("occupationHelp").style.display = "inline";
	
};

document.getElementById("occupation").onblur = function () {
    document.getElementById("occupationHelp").style.display = "none";
};

document.getElementById("education").onfocus = function () {
    document.getElementById("educationHelp").style.display = "inline";
	
};

document.getElementById("education").onblur = function () {
    document.getElementById("educationHelp").style.display = "none";
};

document.getElementById("interests").onfocus = function () {
    document.getElementById("interestsHelp").style.display = "inline";
	
};

document.getElementById("interests").onblur = function () {
    document.getElementById("interestsHelp").style.display = "none";
};