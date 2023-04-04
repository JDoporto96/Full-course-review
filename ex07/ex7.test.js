const longestRunOfTwoNumbers= require('./ex7');


test("return the longest run of two consecutive digits", ()=>{
    const input = "1212223311212223"
    expect(longestRunOfTwoNumbers(input)).toBe("1121222");
})

test("return the same input if input is shorter than 2 ", ()=>{
    const input = "1"
    expect(longestRunOfTwoNumbers(input)).toBe(input);
})
