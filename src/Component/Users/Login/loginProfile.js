import React from 'react';
import loginCheck from '../../Authen/loginCheck';
import { Link } from 'react-router-dom';




export default function LoginProfile() {

    var username = "false";
    if (username) {
        return (
            <p style={{ color: '#1c0083', fontWeight: 'bold' }} >{username}</p>
        )
    } else {
        return (
            <Link to='/Login'><p style={{ color: '#1c0083', fontWeight: 'bold', textDecoration: 'none' }} >Login </p></Link>
        )
    }



}
