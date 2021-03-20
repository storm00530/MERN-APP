import httpService from "../services";
import {LOGIN_USER,REGISTER_USER,UPDATE_USER} from "./type";

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
