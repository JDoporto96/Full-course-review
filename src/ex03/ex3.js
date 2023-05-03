// // Create a cancellable fetch request
// const controller = new AbortController();

function cancellableFetch(url){
    const controller = new AbortController();
    const promise = fetch(url, {signal: controller.signal});
    promise.cancel = ()=> controller.abort();
    return promise;
}


function someAction(res){
   return res.json();
}

function otherAction(a){
    return a.name

}

function errorHandler(err){
    return(err.name)
}

const someCondition = true;

const result = cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
if(someCondition){
    result.cancel()
}

result.then(someAction).then(otherAction).catch(errorHandler)

// const exFunc = async()=>{
//     const result = cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     result.cancel()

//     return await result
// }

// const out = exFunc();


module.exports ={cancellableFetch, someAction, otherAction, errorHandler}

