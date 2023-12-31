import { jwtDecode } from "jwt-decode";

class AuthService {
    constructor() {
        this.tokenKey = "id_token";
    }

    login(idToken) {
        console.log("Login function called");
        sessionStorage.setItem(this.tokenKey, idToken);

        window.location.assign("/");
    }

    logout() {
        console.log("Logout function called");
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
          const decoded = jwtDecode(token);
          if (decoded.exp < Date.now() / 1000) {
            return true;
          } else return false;
        } catch (err) {
          return false;
        }
    }

    loggedIn() {
        const token = this.getToken();
        console.log(this.isTokenExpired());
        console.log(Date.now()/1000);
        return !!token && !this.isTokenExpired(token);
    }
}

export default new AuthService();