import {renderHook} from '@testing-library/react';
import useLocalStorage from '../../ex44_hooks/useLocalStorageHook';

it('Get a null value as no item "test" is stored on LocalStorage', ()=>{
    const item = localStorage.getItem("test");
    expect(item).toBeNull();
})

it('Get the value 1 as it stores it on localStorage', () => {
    const {result}  = renderHook(()=>useLocalStorage("test", 1));
    expect(result.current).toEqual(1)
  
})

 it('Get the value 1 as it is already stored on localStorage', () => {
    const {result}  = renderHook(()=>useLocalStorage("test", 5));
    expect(result.current).toEqual("1")
   
 })
