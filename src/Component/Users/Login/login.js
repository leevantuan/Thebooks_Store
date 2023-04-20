import { React, useState } from 'react';
import styles from './login.module.scss'
import loginCheck from '../../Authen/loginCheck.js'

import { FaUserCheck } from 'react-icons/fa';
import { FaUnlockAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { Checkbox, colors } from '@mui/material';
import { FormControlLabel, Button } from '@mui/material';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassWord, setSignUpPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');
    const [signUpName, setSignUpName] = useState('');

    function isValidEmail(e) {
        return /\S+@\S+\.\S+/.test(e);
    }
    function isValidPassword(p) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(p);
    }

    const isValidSignUpInfo = () => {
        if (isValidEmail(signUpEmail) && isValidPassword(signUpPassWord)
            && signUpPassWord === confirmPassWord && signUpName) return true;
        else return false;
    }


    const handleLogin = () => {
        if (!isValidEmail(email)) {
            alert("Invalid Email!")
        }
        fetch('https://localhost:7229/api/Authentication/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.accesstoken) {
                    localStorage.setItem('token', JSON.stringify(res));
                    var token = loginCheck();
                    if (token) {
                        alert(`Dang nhap thanh cong! Xin chao ${token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]}`);
                        window.location = '/'
                    }
                } else alert("Email da ton tai!")
            });

    };

    const handleSignUp = () => {
        if (!isValidSignUpInfo()) {
            alert("Vui long nhap thong tin hop le!")
            return false;
        }

        var name = signUpName;
        var email = signUpEmail;
        var password = signUpPassWord;
        var confirmPassword = confirmPassWord;
        fetch('https://localhost:7229/api/Authentication/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmPassword,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.succeeded) {
                    alert("Dang ky thanh cong!");
                    window.location = '/Login'
                }
            });
    }
    return (
        <div className={styles.lgContainer}>
            <div className={styles.lgForm}>
                <form>
                    <h2 className={styles.SignIn}>Login</h2>

                    <div className={styles.inputBox}>
                        <span className={styles.icons}>
                            <FaUnlockAlt />
                        </span>
                        <input
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                        <label className={styles.lbLogin}>Email</label>

                    </div>

                    <div className={styles.inputBox}>
                        <span className={styles.icons}>
                            <FaUnlockAlt />
                        </span>
                        <input
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                        <label className={styles.lbLogin}>PassWord</label>
                    </div>

                    <div className={styles.remember}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                    </div>
                    <div className={styles.btnLogin}>
                        <Button
                            type='submit'
                            className={styles.btnClickLogin}
                            onClick={() => {
                                handleLogin();
                            }}
                            variant="contained"
                            href="#contained-buttons"
                        >
                            Login
                        </Button>
                    </div>

                    <div className={styles.create}>
                        <h3>
                            Create an Account?
                            <p
                                href="/"
                                className={styles.signUp_link}
                                onClick={() => {
                                    document.querySelector(`.${styles.lgForm}`).style.transform = 'translatey(-610px)';
                                    document.querySelector(`.${styles.lgForm2}`).style.transform = 'translatey(-620px)';
                                    document.querySelector(`.${styles.lgContainer}`).style.width = '1200px';
                                    // console.log( document.querySelector(`.${styles.loginUp}`))
                                }}
                            >
                                {' '}
                                Sign Up
                            </p>
                        </h3>
                    </div>
                </form>
            </div>


            {/* pasge2 */}

            <div className={styles.lgForm2}>
                <form>
                    <h2 className={styles.SignIn}>Sign Up</h2>

                    <div className={styles.lgColum1}>
                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaUserCheck />
                            </span>
                            <input type="user" onChange={(e) => {
                                setSignUpEmail(e.target.value);
                            }} required />
                            <label className={styles.lbLogin}>Email</label>
                        </div>

                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaUnlockAlt />
                            </span>
                            <input type="pass" onChange={(e) => {
                                setSignUpPassWord(e.target.value);
                            }} required />
                            <label className={styles.lbLogin}>PassWord</label>
                        </div>

                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaUnlockAlt />
                            </span>
                            <input type="confirm" onChange={(e) => {
                                setConfirmPassWord(e.target.value);
                            }} required />
                            <label className={styles.lbLogin}>Confirm PassWord</label>
                        </div>
                    </div>

                    <div className={styles.lgColum2}>
                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaPhone />
                            </span>
                            <input type="user" required />
                            <label className={styles.lbLogin}>Number Phone</label>
                        </div>

                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaHome />
                            </span>
                            <input type="pass" required />
                            <label className={styles.lbLogin}>Address</label>
                        </div>

                        <div className={styles.inputBox}>
                            <span className={styles.icons}>
                                <FaUserFriends />
                            </span>
                            <input type="confirm" onChange={(e) => {
                                setSignUpName(e.target.value);
                            }} required />
                            <label className={styles.lbLogin}>Your Name</label>
                        </div>

                    </div>
                    <div className={styles.lbPasswordrequired}>
                        Mật khẩu phải bao gồm kí tự viết hoa , kí tự thường
                        , kí tự số , kí tự đặc biệt và có ít nhất 8 kí tự
                    </div>
                    <div className={styles.btnLogin}>
                        <Button onClick={() => { handleSignUp() }} className={styles.btnClickLogin} variant="contained" href="#contained-buttons">
                            Sign up
                        </Button>
                    </div>

                    <div className={styles.create}>
                        <h3>
                            Already have an Account?{' '}
                            <p
                                href="/ "
                                className={styles.Login_link}
                                onClick={() => {
                                    document.querySelector(`.${styles.lgForm}`).style.transform = 'translatey(0px)';
                                    document.querySelector(`.${styles.lgForm2}`).style.transform = 'translatey(20px)';
                                    document.querySelector(`.${styles.lgContainer}`).style.width = '600px';
                                }}
                            >
                                Login
                            </p>
                        </h3>
                    </div>
                </form>
            </div>
        </div>
    );
}
