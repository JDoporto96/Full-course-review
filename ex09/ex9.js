// Implement an array flattening function with recursive and iterative versions. Do not use the built-in function.
const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]
// const input = [1,2,[,3]]

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
[1,2,[,3]]

function flattenArrayIt(arr){
    let i = 0;
    const flat=[];

    if (!Array.isArray(arr)) {
        return arr;
    }

    while (i < arr.length) { 
        if (Array.isArray(arr[i])) {
            flat.concat(arr.splice(i, 1, ...arr[i].filter(Boolean)));
        }else {
            flat.push(arr[i])
            i++;
        }
    }

    return flat;
}


module.exports={flattenArray, flattenArrayIt}