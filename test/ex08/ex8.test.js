const flatten= require('../../src/ex08/ex8');

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


const expectedOutput ={
    oldObj_name: 'Sara',
    oldObj_gender: 'Apache Attack Helicopter',
    oldObj_address_location_city: 'SF',
    oldObj_address_location_state: 'CA',
    oldObj_address_preferredLocation_city: 'SF',
    oldObj_address_preferredLocation_state: ['CA', 'MN'],
    oldObj_address_other: undefined
}



test("return the flatten object", ()=>{
    expect(flatten(oldObj,"oldObj")).toEqual(expectedOutput);
})