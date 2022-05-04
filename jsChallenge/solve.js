
/// TASK 1

let printSum = function (arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) { 
       result += arr[i]  
    }
    console.log(result)
}

printSum([1,2,3,4,5]);


/// TASK 3
        function pointArray(alice,bob) {
            for (let i = 0; i < alice.length; i++) {
                if (alice[i] > bob[i]) {
                 console.log("Alice has one point");
                }
                if (alice[i] < bob[i]) {
                    console.log("Bob get the point");
                   }
    
              if (alice[i] === bob[i]) {
                console.log("Zero points, try again");
    
              } 
            }
        }

        pointArray([100,92,34],[99,92,44]);

//// TASK 4
let length2 = [-1, 2,3,0,0,9,-4,-9]
let  Integers = [];
let positiveIntegers = 0;
let negativeIntegers = 0;
let zeroIntegers = 0;
let result;


for (let i = 0; i < length2.length; i++) {
    if(length2[i] > 0) {
        positiveIntegers += 1
    }
    if(length2[i] < 0) {
        negativeIntegers += 1 
    }
    if (length2[i] === 0){
        zeroIntegers += 1
    } 
}
console.log("Total Positive Numbers: ", positiveIntegers);
console.log("Total Negative Numbers: ", negativeIntegers);
console.log("Total Numbers with Zero: ", zeroIntegers);
console.log("Total Length: ", length2.length);
Integers.push(positiveIntegers);
Integers.push(negativeIntegers);
Integers.push(zeroIntegers);
console.log("Arraying Total Integers: ", Integers)

for (let j = 0; j < Integers.length; j++) {
    result = Integers[j] /  length2.length
    console.log("Integers:",Integers[j], "/", "TOTAL:",length2.length);
    console.log("Final result:", result);
}


/// TASK 5

function firstFunction (a,b) {
      return a * b
}
console.log(firstFunction(2,3));