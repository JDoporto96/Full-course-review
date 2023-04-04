const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 3;
// reverseBlocks(arr, blockSize);
/**
* Expected result:
* [2,1,0,5,4,3,8,7,6,9]
*/
function reverseBlocks(arr,blockSize){
    let n = arr.length;
    let i=0;
    let j=blockSize;

    while(j<=n){
        const temp = arr.slice(i,j).reverse();
        while(i<j){
            arr[i]=temp[i+blockSize-j]
            i++
        }
        j+=blockSize;
    }
   
    return arr
}

module.exports=reverseBlocks;



