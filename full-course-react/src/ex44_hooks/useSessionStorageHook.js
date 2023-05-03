import createLocationStorageHook from "./useInnerStorageHook";


const useLocalStorage = createLocationStorageHook(sessionStorage);
export default useLocalStorage;