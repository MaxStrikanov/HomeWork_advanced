'use strict';

const num = 266219;
let numArr = Array.from( num.toString() );

console.log( numArr );

let product = numArr.reduce( ( prev, curr ) => { 
    return prev * curr 
});

console.log( product );
console.log( (product ** 3));
console.log( (product ** 3).toString().slice(0,2) );







