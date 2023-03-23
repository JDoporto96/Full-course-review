// Create a retry function for async calls. Select retry time with increments.

const urlQuery = url => () => fetch(url)
 
const maxRetry = 3;
const useIncrement = true;
const delay = 3000;
 
/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if useIncrements
* is set to true. 
*/

async function queryRetry(fn, maxRetry, delay, useIncrement=false){
    for (let i=0; i<maxRetry; i++){
        try{
           
            if(useIncrement){
                const sleep = await new Promise(res=>setTimeout(res,i*delay))
            }
            return await fn()
        }catch{
          
        }
    }
    throw new Error(`The function was tried ${maxRetry} times and failed`)
}



function handleSuccess(res){
    console.log(res)
}

function handleErrorOrMaxRetryExceeded(err){
    console.error(err)
}

queryRetry(urlQuery('some/url'), maxRetry, delay, useIncrement)
   .then(handleSuccess)
   .catch(handleErrorOrMaxRetryExceeded);


module.exports =queryRetry;
