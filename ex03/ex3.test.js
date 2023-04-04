const {cancellableFetch} = require('./ex3')

test('Fetched not aborted, succesfully finished and returned value "pikachu" ', async () => {
    const result = await cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const pokemon = await result.json();
    expect(pokemon.name).toBe('pikachu');
    
})

test('Fetched aborted, returned an error of name "AbortError" ', async() => {
    const abortFunction= async()=>{
        const result = cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        result.cancel();

        return await result
    }
    
    await expect(abortFunction()).rejects.toHaveProperty("name", "AbortError");

    
})
