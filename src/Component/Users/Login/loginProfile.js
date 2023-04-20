import React from 'react';
import loginCheck from '../../Authen/loginCheck';
import { Link } from 'react-router-dom';

export default function LoginProfile() {
    var token = loginCheck();
    if (token) {
        return (
            <p style={{ color: '#1c0083', fontSize: 25 }} >{token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]}</p>
        )
    } else {
        return (
            <Link to='/Login'><p style={{ color: '#1c0083', textDecoration: 'none' }} >Login </p></Link>
        )
    }



}
