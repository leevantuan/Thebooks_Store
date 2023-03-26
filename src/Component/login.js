import { React, useState } from 'react'
import styles from './component.module.scss'
// import clsx from 'clsx';

import { FaUserCheck } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Checkbox } from '@mui/material';
import { FormControlLabel , Button } from '@mui/material'; 
import { json } from 'react-router-dom';

const user = {
    "email": "user1@example.com",
    "password": "User123@"
  }

export default function Login() {
  const [email , setEmail ] = useState("");
  const [password , setPassword] = useState("");
  const [token , setToken] = useState("");
  
  const handleLogin = () => {
    fetch(
      "https://localhost:7229/api/Authentication/login",{
        method:"post",        
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
          email: "user1@example.com",
          password: "User123@",
        }),
    })
    .then((res) => res.json())
      .then((res) => {
          console.log(res)
          setToken(res);
      })
  }
  

  return (
    <div className={styles.lgContainer}>

      <div className={styles.lgForm}>
        <form >
          <h2 className={styles.SignIn}>Login</h2>

          <div className={styles.inputBox}>
            <span className={styles.icons}>
              <FaUserCheck />
            </span>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} required />
            <label className={styles.lbLogin}>Email</label>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.icons}>
              <FaUnlockAlt />
            </span>
            <input type="pass" onChange={(e)=>{setPassword(e.target.value)}} required />
            <label className={styles.lbLogin}>PassWord</label>
          </div>

        <div className={styles.remember}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

        </div>
        <div className={styles.btnLogin}>
        <Button className={styles.btnClickLogin} onClick = {()=>{handleLogin()}} variant="contained" href="#contained-buttons">Login</Button>
        </div>  

        <div className={styles.create}>
          <h3>Create an Account? 
            <p href='/' className={styles.signUp_link}
              onClick={() => {
                document.querySelector(`.${styles.lgForm}`).style.transform = 'translatey(-610px)'
                document.querySelector(`.${styles.lgForm2}`).style.transform = 'translatey(-620px)'
              document.querySelector(`.${styles.lgContainer}`).style.width = '1200px'
                // console.log( document.querySelector(`.${styles.loginUp}`))
              }}
            > Sign Up</p>
          </h3>
        </div>
        </form >
      </div>

      {/* pasge2 */}

      <div className={styles.lgForm2}>
        <form >

          <h2 className={styles.SignIn}>Sign Up</h2>

          <div className={styles.lgColum1}>
            <div className={styles.inputBox}>
              <span className={styles.icons}>
                <FaUserCheck />
              </span>
              <input type="user" required />
              <label className={styles.lbLogin}>UserName</label>
            </div>

            <div className={styles.inputBox}>
              <span className={styles.icons}>
                <FaUnlockAlt />
              </span>
              <input type="pass" required />
              <label className={styles.lbLogin}>PassWord</label>
            </div>

            <div className={styles.inputBox}>
              <span className={styles.icons}>
                <FaUnlockAlt />
              </span>
              <input type="confirm" required />
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
              <input type="confirm" required />
              <label className={styles.lbLogin}>Your Name</label>
            </div>
          </div>

        <div className={styles.btnLogin}>
        <Button className={styles.btnClickLogin} variant="contained" href="#contained-buttons">Sign up</Button>
        </div>  

        <div className={styles.create}>
          <h3>Already have an Account? <p href='/ ' className={styles.Login_link}
            onClick={() => {
              document.querySelector(`.${styles.lgForm}`).style.transform = 'translatey(0px)'
              document.querySelector(`.${styles.lgForm2}`).style.transform = 'translatey(20px)'
              document.querySelector(`.${styles.lgContainer}`).style.width = '600px'
            }}

            >Login</p></h3>
        </div>
        </form >
      </div>

    </div>
  )
}

