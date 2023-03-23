// Find the largest run of at most two distinct numbers (D9)

const input = "1212223311212223"
// const input = "1"
/**
* Example 1:
*  Input 1212223311212223
*  Output 1121222
*
* Example 2:
*  Input 111
*  Output 111
*/
function longestRunOfTwoNumbers(input){
    if(input.length < 2){
        return null
    }
    let str='';
    let temp='';
    let subtemp='';
    let i =0;

    for (let num of input){
        if(!temp.includes(num)){
            i++;
            if(i<=2){
                temp+=num;
            }else{
                i=2;
                str = str.length < temp.length? temp: str ;
                temp=subtemp+num;
            }
        }else{
            temp+=num;
        }
        subtemp = subtemp.endsWith(num)? subtemp+num:num
    }
    str = str.length < temp.length? temp: str ;

    return str
}

module.exports = longestRunOfTwoNumbers

