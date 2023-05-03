import createLocationStorageHook from "./useInnerStorageHook";


const useLocalStorage = createLocationStorageHook(localStorage);
export default useLocalStorage;