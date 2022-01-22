import countapi from 'countapi-js';

export const getValue = (key, namespace) => {
    if (key && namespace){
       return countapi.get(namespace, key)
       .then((result) =>{
            return result.value;
        })
        
    }else {
        return ("Please provide key and namespace");
    }
};

export const setKeyValue = async (key, namespace, value) => {
    if (key!==null && namespace!==null && value!==null)
        return countapi.set(namespace, key, value).then(
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
        return countapi.info(namespace, key).then(
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
        return countapi.update(namespace, key, amount).then(
            (result) =>{
                return result;
            }
        )
    else {
        return("Error");
    }
};