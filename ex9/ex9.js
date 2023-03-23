// Implement an array flattening function with recursive and iterative versions. Do not use the built-in function.
const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]

function flattenArray(input){
    if (!Array.isArray(input)) {
        return input;
    }
    const flat = [];

    input.forEach(el => {
        if (Array.isArray(el)) {
        flat.push(...flattenArray(el));
        } else {
        flat.push(el);
        }
    });

    return flat;
};


/**
* expected output:
* [1,2,3,4,5,6,7,8,9,10]
*/

function flattenArrayIt(arr){
    var i = 0;

    if (!Array.isArray(arr)) {
        return arr;
    }

    while (i < arr.length) { 
        if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
        } else {
        i++;
        }
    }
    return arr;
}

module.exports={flattenArray, flattenArrayIt}