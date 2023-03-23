const ex3 = require('./ex3')

const controller = ex3.controller;



test('Fetched not aborted, succesfully finished and returned value "pikachu" ', () => {
    const result = ex3.cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    result.cancel = ()=>controller.abort();
    result.then(ex3.someAction).then(ex3.otherAction).then(data =>{
        expect(data).toBe("pikachu")
    }).catch(ex3.errorHandler);
    if(false){
        result.cancel()
    }
})

test('Fetched aborted, returned value is error name "AbortError" ', () => {
    const result = ex3.cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    result.cancel = ()=>controller.abort();
    result.then(ex3.someAction).then(ex3.otherAction).catch(ex3.errorHandler);
    if(true){
        result.cancel()
    }
    expect(result).toBe("AbortError")
    
})
