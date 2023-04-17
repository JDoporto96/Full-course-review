import { useEffect, useState } from "react";


export default function useLocalStorage(key, val){
    const [value, setValue] = useState(()=>{
        try{
            let item = localStorage.getItem(key);
            if(item){
               return item
            };
            return val
        }catch(e){
            return val
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, value)
    },[value])

    return value
}