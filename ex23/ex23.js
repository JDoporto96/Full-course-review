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
        primes.push(i)
        progress = primes.length*100/n
        if(progress%2==0){
            ld.load(2)
        }
       }
       i++;
       
       

    }
    console.log(primes)
    return primes
}

const input = process.argv[2]
const output=getPrimes(input);


module.exports={isPrime, getPrimes};