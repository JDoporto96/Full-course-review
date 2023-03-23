// Implement the flatten function that will produce the expected output. Create solutions with an imperative and a functional style approach
const oldObj = {
   name: 'Sara',
   gender: 'Apache Attack Helicopter',
   address: {
       location: {
           city: 'SF',
           state: 'CA'
       },
       preferredLocation: {
           city: 'SF',
           state: ['CA', 'MN']
       },
       other: undefined
   }
};
/**
*
* @param {Object} oldObject
* @param {String} parentName
*/
 
function flatten(oldObject, parentName){
    let result = {};
    for (const i in oldObject) {
        if ((typeof oldObject[i]) === 'object' && !Array.isArray(oldObject[i])) {
            const temp = flatten(oldObject[i]);
            for (const j in temp) {
                if(parentName){
                    result[parentName+'_'+ i + '_' + j] = temp[j];
                }else{
                    result[i + '_' + j] = temp[j];
                }
                
            }
        }else{
            if(parentName){
                result[parentName+'_'+i] = oldObject[i];
            }else{
                result[i] = oldObject[i];
            }
            
        }
    }
    return result;
}
console.log(flatten(oldObj, "oldObj"))
/**
*  expected output:
*  {
*    oldObj_name: 'Sara',
*    oldObj_gender: 'Apache Attack Helicopter',
*    oldObj_address_location_city: 'SF',
*    oldObj_address_location_state: 'CA',
*    oldObj_address_preferredLocation_city: 'SF',
*    oldObj_address_preferredLocation_state: ['CA', 'MN'],
*    oldObj_address_other: undefined
*  }
*/

module.exports = flatten

