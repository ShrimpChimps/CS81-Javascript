/*
 Ryan Huffman
 CS81, Section 1231
 Summer 2016
 Assignment 7, Exercise 5.27
 7/12/16
 */

var Movie = function(title, rating, directors, producers, studio, releaseDate){
	this.title = title;
	this.rating = rating;
	this.directors = directors;
	this.producers = producers;
	this.studio = studio;
	this.releaseDate = releaseDate;
};

//For testing, with simple values
var m = new Movie("A", "B", ["C","D"], ["E", "F"], "G", "H");
var m2 = new Movie("A2", "B2", ["C2","D2"], ["E2", "F2"], "G2", "H2");

alert(m.title + " " + m.rating + " " + m.directors + " " + m.producers + " " + m.studio + " " + m.releaseDate + " ");
alert(m2.title + " " + m2.rating + " " + m2.directors + " " + m2.producers + " " + m2.studio + " " + m2.releaseDate + " ");