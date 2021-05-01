import { useValidator } from './validator';

const validationConfigs = {
    email_login: {
        methods: [
            { method: 'email', message: 'Provided email is invalid!' }
        ]
    },
    password_login: {
        methods: [
            { method: 'minLength', lnght: 1, message: 'Pasword cant be empty!' }
        ]
    },
    nickname_register: {
        methods: [
            { method: 'minLength', lnght: 6, message: 'Nickname must be 6 symbols as min!' }
        ]
    },
    email_register: {
        methods: [
            { method: 'email', message: 'Provided email is invalid!' }
        ]
    },
    password_register: {
        methods: [
            { method: 'password' }
        ]
    },
    password_register_repeat: {
        methods: [
            { method: 'password_repeat', password: registerForm.password_register, message: 'Passwords are not much!' }
        ]
    },
    email_reset_password : {
        methods: [
            { method: 'email', message: 'Provided email is invalid!' }
        ]
    }
};
const { validate } = useValidator();
const value = '1234567';
const result = validate(value, validationConfigs.email_login);
console.log(result);