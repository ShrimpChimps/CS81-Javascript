/*
 Ryan Huffman
 CS81, Section 1231
 Summer 2016
 Assignment 6, Exercise 5.7
 7/6/16
 */

var numberOfZeros = function (n) {
    var zeroCount = 0;

    for(i = 0; i < n.length; i += 1){
        if(+n[i] === 0){
            zeroCount += 1;
        }
    }

    return zeroCount;
}