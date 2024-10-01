
export const clearStorageItem = (key: string):void => {
    localStorage.setItem(key, "");
}

export const getLocalStorageItem = (key: string):any | null=>{
    try{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }catch(e){
        clearStorageItem(key);
    }
}

export const setLocalStorageItem = (key: string, value: any):void => {
    localStorage.setItem(key, JSON.stringify(value));
}
