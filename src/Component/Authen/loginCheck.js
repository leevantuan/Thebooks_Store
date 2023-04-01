
import jwtDecode from "jwt-decode";

export default function loginCheck() {
    var token = localStorage.getItem('token');

    if (token) {
        var decoded = jwtDecode(token)
        return decoded;
    } else {
        return null;
    }
}

