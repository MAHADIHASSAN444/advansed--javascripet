const numbers = [2,4,3,5,9,7];
// const output =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(elements) {
//     return elements * elements;  
// }
//   const result = numbers.map(function(elements) {
//       return elements* elements;
 
// })
// ///
// const square = elements => elements * elements;
// ////
// const square = x => x*x;
///
// const result = numbers.map(x => x*x );
///

// const bigger = numbers.filter(x => x<5);
///

const bigger = numbers.find(x => x>5);
console.log(bigger);