import { jwtDecode } from "jwt-decode";

class AuthService {
    constructor() {
        this.tokenKey = "id_token";
        this.usernameKey = "userName";
    }

    login(idToken, userName) {
        console.log("Login function called");
        sessionStorage.setItem(this.tokenKey, idToken);
        sessionStorage.setItem(this.usernameKey, userName);

        window.location.assign("/");
    }

    logout() {
        console.log("Logout function called");
        sessionStorage.removeItem(this.tokenKey);
        sessionStorage.removeItem(this.usernameKey);

        window.location.assign("/");
    }

    getToken() {
        return sessionStorage.getItem(this.tokenKey);
    }

    getProfile() {
        return sessionStorage.getItem(this.usernameKey);
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