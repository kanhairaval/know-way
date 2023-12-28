import { jwtDecode } from "jwt-decode";

class AuthService {
    constructor() {
        this.tokenKey = "id_token";
    }

    login(idToken) {
        sessionStorage.setItem(this.tokenKey, idToken);

        window.location.assign("/");
    }

    logout() {
        sessionStorage.removeItem(this.tokenKey);

        window.location.assign("/");
    }

    getToken() {
        return sessionStorage.getItem(this.tokenKey);
    }

    getProfile() {
        return jwtDecode(this.getToken());
    }

    isTokenExpired(token) {
        try {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp < Date.now() /1000) {
                return true;
            } else
            return false;
        } catch (err) {
            return false;
        }
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
}

export default new AuthService();