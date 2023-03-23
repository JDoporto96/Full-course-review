// Given an array of natural numbers (ℕ1) of length N, find the index of that array that balances the left and right sum. 
//If no such position exists, return -1.


const arr = [1,2,3,4,9,9,2,7,10,13];

const equalizer = (arr)=>{
    let sumLeft = arr.reduce((a,b)=>a+b);
    let sumRight= 0;
    let j = arr.length -1;
    while(sumRight<=sumLeft){
        if(sumLeft === sumRight){
            return j
        }else{
            sumLeft-=arr[j]
            sumRight+=arr[j]
            j--
        }
    }
    return -1
}


module.exports=equalizer