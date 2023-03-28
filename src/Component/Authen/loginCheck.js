
import jwtDecode from "jwt-decode";

export default function loginCheck() {
    var token = localStorage.getItem('token');
    var decoded = jwtDecode(token)
    console.log(decoded);
    if (token) {
        return decoded;
    } else {
        return null;
    }
}

