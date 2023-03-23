// Implement shorthand deep object assignment 
	
// function set(obj, path, value){}
// set(obj, 'path.to.deeply.nested.property', 42);

// Create any property that does not exist
// Throw an error if any path key cannot be created or assigned to in the case of the last path key

let obj ={};

function set(obj, path, value){
    const nestedProps = path.split(".");
    
    let temp = obj
    for(let i = 0; i<nestedProps.length;i++){
       if(i == nestedProps.length-1){
        temp[nestedProps[i]]=value
       }else{
        if(!temp.hasOwnProperty(nestedProps[i])){
            temp[nestedProps[i]]={}
        }
        
        temp=temp[nestedProps[i]]

       }
        
    }
    temp=value

    return obj
    
}

let test = (set(obj, 'path.to.deeply.nested.property', 42));
console.log(test)

module.exports=set