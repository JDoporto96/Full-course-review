const set= require('../../src/ex18/ex18')


test("Return 42 as the value on the specified path", ()=>{
    const obj={};
    const test = set(obj, 'path.to.deeply.nested.property', 42)
    expect(test.path.to.deeply.nested.property).toBe(42);
})

test("Return false as it cannot overwrite properties",()=>{
    const obj={"path":3};
    expect(set(obj, 'path.to.deeply.nested.property', 42)).toBeFalsy()

})

test("Adds path to an existing object",()=>{
    const obj={"another":{"path":42}};
    const res ={
        "another":
            {
                "path": 42
            },
        "path":
            {
                "to":
                {
                    "deeply":42
                }
            }
        }
    expect(set(obj, 'path.to.deeply', 42)).toEqual(res)

})