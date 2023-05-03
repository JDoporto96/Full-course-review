import {renderHook} from '@testing-library/react';
import useSessionStorage from '../../src/ex44_hooks/useSessionStorageHook';

it('Get a null value as no item "test" is stored on sessionStorage', ()=>{
    const item = sessionStorage.getItem("test");
    expect(item).toBeNull();
})

it('Get the value 1 as it stores it on sessionStorage', () => {
    const {result}  = renderHook(()=>useSessionStorage("test", 1));
    expect(result.current).toEqual(1)
  
})

 it('Get the value 1 as it is already stored on sessionStorage', () => {
    const {result}  = renderHook(()=>useSessionStorage("test", 5));
    expect(result.current).toEqual("1")
   
 })
