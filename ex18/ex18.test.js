const set= require('./ex18')


test("Return 42 as the value on the specified path", ()=>{
    const obj={};
    const test = set(obj, 'path.to.deeply.nested.property', 42)
    expect(test.path.to.deeply.nested.property).toBe(42);
})