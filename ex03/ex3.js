// // Create a cancellable fetch request
const controller = new AbortController();

async function cancellableFetch(url){
    try{
        return await fetch(url, {signal: controller.signal})
    }catch(err){
        throw err;
    }       
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

const someCondition = false;

const result = cancellableFetch("https://pokeapi.co/api/v2/pokemon/pikachu");

result.cancel = ()=>controller.abort();

result.then(someAction).then(otherAction).catch(errorHandler);

if(someCondition){
    result.cancel()
}


module.exports ={cancellableFetch, someAction, otherAction, errorHandler, controller}