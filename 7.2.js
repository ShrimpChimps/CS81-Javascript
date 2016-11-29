/*
Ryan Huffman
CS81, Section 1231
Summer 2016
Assignment 10, Exercise 7.2
7/18/16
*/

var Circle = function(r){
	this.radius = r;
};
Circle.prototype.area = function(){
	return Math.PI * this.radius * this.radius;
}
var c = new Circle(10);

/*
The value of c.constructor is the Circle function:

function(r){
	this.radius = r;
}

Using Object.getOwnPropertyNames(c), the only own property
of c is radius.

Using JSON.stringify(Object.getOwnPropertyDescriptor(c, "radius")),
I confirmed that radius is the only enumerable property of c. This makes
sense because if an object is created with an object literal, all of its
properties are defaulted with enumerable = true
*/