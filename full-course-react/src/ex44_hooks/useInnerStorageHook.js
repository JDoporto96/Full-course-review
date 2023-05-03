import { useEffect, useState } from 'react'

function createLocationStorageHook(location) {
    return function useLocationStorage(key, val){
        const [value, setValue] = useState(()=>{
            try{
                let item = location.getItem(key);
                if(item){
                   return item
                };
                return val
            }catch(e){
                return val
            }
        });

        useEffect(()=>{
            location.setItem(key, value)
        },[value])
    
        return value
    }
 
}

export default createLocationStorageHook;