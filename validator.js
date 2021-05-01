import { validationMethods } from './validationsMethods';

export const useValidator = () => {
    const validate = (value, params) => {
        if(!('methods' in params) || !Array.isArray(params.methods) || params.methods.length === 0) {
            console.log(`ERROR: No validation methods`);
            return;
        }
        const responseData = { errors: [] };
        params.methods.forEach((method) => {
            if(typeof validationMethods[method.method] !== 'function') {
                console.log(`ERROR: Validation method "${method.method}" does not exist!`);
                return;
            }
            const validationResult = validationMethods[method.method](value, method);
            if(validationResult) responseData.errors.push(validationResult);
        });
        console.log(responseData);
        return responseData;
    }
    
    return { validate };
}