import { useEffect, useState } from "react";
import {openDB} from "idb"


export default function useIndexDB(dbName, store, key, val){
    const [value, setValue]=useState()
    useEffect(()=>{
        (async () =>{
            const db = await openDB(dbName, 1, {
                upgrade(db){
                    if(!db.objectStoreNames.contains(store)){
                        db.createObjectStore(store, {keyPath:"ssn"})
                    }
                },
            });

            const transaction = db.transaction(store, "readonly");
            const storedValue = await transaction.objectStore(store).get(key);
            setValue(storedValue? storedValue : val);

        })();
    },[])

    useEffect(()=>{
        (async() => {
            const db = await openDB(dbName, 1);
            await db.put(store, val, key);
          })();

    },[value])

    return value
}