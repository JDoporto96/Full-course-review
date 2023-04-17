import { useEffect, useState } from "react";


export default function useSessionStorage(key, val){
    const [value, setValue] = useState(()=>{
        try{
            let item = sessionStorage.getItem(key);
            if(item){
               return item
            };
            return val
        }catch(e){
            return val
        }
    })

    useEffect(()=>{
        sessionStorage.setItem(key, value)
    },[value])

    return value

}