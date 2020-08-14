  
'use strict';

const num = 266219;
let numArr = Array.from( num.toString() );

console.log( numArr );

let product = numArr.reduce( ( prev, curr ) => { 
    return prev * curr 
});

console.log( product );

const exponent = ( product, n ) => {

    let result = 1;
    
    for (let i = 0; i < n; i++) {
      result *= product;
    }
    return result;
}

console.log( exponent( product, 3 ) );
console.log( exponent( product, 3 ).toString().slice(0,2) ); 






