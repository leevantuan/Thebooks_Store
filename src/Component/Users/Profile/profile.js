import React, { useEffect, useState } from 'react'
import './profile.scss'

import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import loginCheck from '../../Authen/loginCheck';

export default function Profile() {
    const [phoneNumber, setPhoneNumber] = useState(true)
    const [address, setAddress] = useState(true)
    const [order, setOrder] = useState([])


    var username = "";
    const token = loginCheck()
    if (token)
        username = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
    useEffect(() => {
        fetch(`https://localhost:7229/api/Cart/Order`, {
            method: 'get',
            headers: { username },
        })
            .then((res) => res.json())
            .then((json) => {
                setOrder(json);
            });
    }, []);

    console.log(order);

    const [myProfile, setMyProfile] = useState(true)
    const [myCart, setMyCart] = useState(false)
    const [active, setActive] = useState(true)
    const [activeCart, setActiveCart] = useState(false)

    const HandleMyProfile = () => {
        setMyProfile(!myProfile)
        setMyCart(!myCart)
        setActive(!active)
        setActiveCart(!activeCart)
    }
    const HandleMyCart = () => {
        setMyProfile(!myProfile)
        setMyCart(!myCart)
        setActive(!active)
        setActiveCart(!activeCart)
    }
    return (
        <div className='myProfile-container'>
            <ul className='left-myProfile'>
                <li className='avatar-myProfile'>
                    <div></div>
                    <p>Your Name</p>
                </li>
                <li onClick={HandleMyProfile} className={active ? 'active' : ''} ><FaUser /><p>My Profile</p></li>
                <li onClick={HandleMyCart} className={activeCart ? 'active' : ''} ><FaClipboardList /><p>My Oder</p></li>
            </ul>

            <div className='right-myProfile' hidden={myProfile ? false : true} >
                <h2>My Profile</h2>
                <p>Profile for security</p>
                <hr />
                <div className='myProfile'>
                    <div className='input-myProfile'>
                        <label>Email</label>
                        <input placeholder='user@gmail.com' disabled />
                    </div>
                    <div className='input-myProfile'>
                        <label>User Name</label>
                        <input placeholder='User' disabled />
                    </div>
                    <div className='input-myProfile'>
                        <label>Phone Number</label>
                        <input placeholder='+84 123 888 888' disabled={phoneNumber ? true : false} />
                        <p onClick={() => setPhoneNumber(!phoneNumber)} >Edit</p>
                    </div>
                    <div className='input-myProfile'>
                        <label>Address</label>
                        <input placeholder='Viet Nam - My - Nga' disabled={address ? true : false} />
                        <p onClick={() => setAddress(!address)}  >Edit</p>
                    </div>
                    <button>Save</button>
                </div>
            </div>

            <ul className='myCart' hidden={myCart ? false : true}>
                <table>
                    <thead >
                        <tr>
                            <th>All</th>
                            <th>Processing</th>
                            <th>Success</th>
                            <th>Cancel</th>
                        </tr>

                    </thead>
                    <tbody >
                        {order.map(e => <tr key={e.id}>
                            <td>{e.userName}</td>
                            <td>{e.totalPrice}</td>
                            <td>True</td>
                            <td>False</td>
                        </tr>)}

                        <tr>
                            <td>BCS Siêu Khủng</td>
                            <td>True</td>
                            <td>True</td>
                            <td>False</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    )
}
