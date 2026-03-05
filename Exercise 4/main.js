// Function Declaration (2 parameters)
function addValues(a, b) {
    return Number(a) + Number(b);
}

console.log("Declaration:");
console.log(addValues(10, 20));    
console.log(addValues("15", 5));   
console.log(addValues(true, 9));    

// Function Expression (2 parameters)
const multiplyValues = function (x, y) {
    return Number(x) * Number(y);
};

console.log("Expression:");
console.log(multiplyValues(4, 6));      
console.log(multiplyValues("3", "7"));  
console.log(multiplyValues(false, 11)); 
