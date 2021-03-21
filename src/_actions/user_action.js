import httpService from "../services";
import {LOGIN_USER,REGISTER_USER,UPDATE_USER,LOGOUT_USER,AUTH_USER} from "./type";

export function loginUser(dataToSubmit) {
    const request = httpService.login(dataToSubmit)
        .then(res => res.data)
        .catch(e => e.data);
    return {type:LOGIN_USER, payload:request};
}
export function registerUser(dataToSubmit) {
    const request = httpService.register(dataToSubmit)
        .then(res => res.data)
        .catch(e => e.data);
    return {type:REGISTER_USER, payload:request};
}
export function updateUser(dataToSubmit) {
    const request = httpService.update(dataToSubmit)
        .then(res => res.data)
        .catch(e => e.data);
    return {type:UPDATE_USER, payload:request};
}
export function logoutUser() {
    const request = httpService.logout()
        .then(res => res.data)
        .catch(e => e.data);
    return {type:LOGOUT_USER, payload:request};
}
export function authUser() {
    const request = httpService.auth()
        .then(res => res.data)
        .catch(e => e.data);
    return {type:AUTH_USER, payload:request};
}
