import countapi from 'countapi-js';

export const getValue = async (key, namespace) => {
    if (key && namespace){
        countapi.get(namespace, key).then(
            (result) =>{
                return result;
            }
        )
        console.log('dad', key, namespace)
    }else {
        return ("Please provide key and namespace");
    }
};

export const setKeyValue = async (key, namespace, value) => {
    if (key!==null && namespace!==null && value!==null)
        countapi.set(namespace, key, value).then(
            (result) =>{
                return result;
            }
        )
    else {
        return("Error");
    }
};

export const getInfoKey = async (key, namespace) => {
    if (key && namespace)
        countapi.info(namespace, key).then(
            (result) =>{
                return result;
            }
        )
    else {
        return("Error");
    }
};

export const updateKeyValue = async (key, namespace, amount) => {
    if (key!==null && namespace!==null && amount!==null)
        countapi.update(namespace, key, amount).then(
            (result) =>{
                return result;
            }
        )
    else {
        return("Error");
    }
};