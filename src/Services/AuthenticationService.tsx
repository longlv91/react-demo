import { BehaviorSubject } from 'rxjs';
import {
    AES, enc
} from 'crypto-js';
import {
    RequestAPI, RequestOptions
} from '../Helpers';
import { environment } from '../Config';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));

const AuthenticationService = {
    login,
    encryptPassword,
    deEncryptedPassword,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    },
    get isAuthorized() {
        // if (currentUserSubject.value && !document.body.classList.contains("authorized")) {
        //     document.body.classList.add("authorized");
        // }
        return currentUserSubject.value && Object.keys(currentUserSubject.value).length > 0 ? true : false;
    }
};

function login(username: any, password: any) {
    return RequestAPI.request(RequestOptions.post(`/api/login`, {
            username,
            password: encryptPassword(password)
        }))
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            // addClass();
            return user;
        });
}

function encryptPassword(password: any) {
    return AES.encrypt(password, environment.encrypt_key).toString()
}

function deEncryptedPassword(password: any) {
    const bytes = AES.decrypt(password, environment.encrypt_key);
    return bytes.toString(enc.Utf8);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    // removeClass();
}

export default AuthenticationService;