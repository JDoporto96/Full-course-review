const equalizer=require('../../src/ex15/ex15');



test("Return index 6 as it balances the sum on both side", ()=>{
    const arr = [1,2,3,4,9,9,2,7,10,13];
    expect(equalizer(arr)).toBe(6);
})

test("Return -1 as it can't balance the sum on both side", ()=>{
    const arr = [1,2,3,4,9,9,2,7,10,13,3];
    expect(equalizer(arr)).toBe(-1);
})