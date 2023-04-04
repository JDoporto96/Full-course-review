const loadBar = require('./loadBar')

function isPrime(n){
    if (n==0 || n==1){
        return false
    }
    for(let i =2; i<= Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

function getPrimes(n){
    const ld = new loadBar();
    const primes =[];
    let progress = 0;
    let i = 2;
    ld.start();
    while (primes.length<n){
       if (isPrime(i)){
        progress = ((primes.length+1)*100)/n

        if(progress%5==0 || progress ===100){
            ld.load(progress) 
        }
        
        primes.push(i)
       }
       i++;
       
    }
    console.log("\n", primes)
    return primes
}

const input = process.argv[2]
const output=getPrimes(input);


module.exports={isPrime, getPrimes};