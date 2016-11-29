/*
 Ryan Huffman
 CS81, Section 1231
 Summer 2016
 Assignment 6, Exercise 5.3
 7/6/16
 */

var arrayAverage = function (n){
    var sum = 0;

    for(i = 0; i < n.length; i += 1){
        sum += +n[i];
    }

    return sum / n.length;
}