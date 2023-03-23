const {isPrime, getPrimes}=require('./ex23');



test("0 is not a prime, must return false", ()=>{
    expect(isPrime(0)).toBeFalsy();
})
test("1 is not a prime, must return false", ()=>{
    expect(isPrime(1)).toBeFalsy();
})
test("2 is a prime, must return true", ()=>{
    expect(isPrime(2)).toBeTruthy();
})
test("3 is a prime, must return true", ()=>{
    expect(isPrime(3)).toBeTruthy();
})

test('Writing first 5 primes test', () => {

    const primes = getPrimes(5);

    expect(primes).toEqual([2,3, 5, 7, 11]);

});
