import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { json } from 'react-router-dom';
import './index.scss'

import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEnvironment } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';

//-----------------------------------
import CartProduct from '../Users/Cart/Item/cartproduct';
import Login from '../Users/Login/login';
import Home from '../Users/Home/home';
import Shop from '../Users/Shop/Shop';
import Description from '../Users/Shop/Description/descriptionItem'

import Category from '../Admin/category';
import Product from '../Admin/product';
import CartView from '../Users/Cart/CartView';
import LoginProfile from '../Users/Login/loginProfile';
import Profile from '../Users/Profile/profile';
import Contact from '../Users/Contact/contact';

// import Shop from './Shop';
// // import SignUp from './SignUp'
// import Description from './descriptionItem';
import { loginEmailSelector } from '../../redux/Selector';
import loginCheck from '../Authen/loginCheck';
import { useSelector } from 'react-redux';
// import ProductItem from './productItem';

export default function Index(props) {
    const [products, setProduct] = useState([]);
    const [carts, setCart] = useState([]);

    var username = ""

    var token = loginCheck();
    if (token)
        username = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]

    useEffect(() => {
        fetch('https://localhost:7229/api/Products')
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });

        fetch(`https://localhost:7229/api/Cart/username`, {
            method: 'get',
            headers: { username },
        })
            .then((res) => res.json())
            .then((json) => {
                setCart(json);
            });

    }, []);

    const getCartById = (id) => {
        return carts.filter((e) => e.id == id);
    }
    const getProductById = (id) => {
        return products.filter((e) => e.id == id);
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        var token = localStorage.getItem('token');
        if (!token) alert('Dang xuat thanh cong!');
    };
    const handleLoginOnclick = () => {
        var token = localStorage.getItem('token');
        if (token) setShowProfile(!showProfile);
    }
    // mui --------------------------
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
    }));

    const actions = [
        { icon: <FaPhoneSquareAlt />, name: 'Zalo' },
        { icon: <FaFacebookF />, name: 'FaceBook' },
        { icon: <FaInstagram />, name: 'Instagram' },
        { icon: <ShareIcon />, name: 'Website' },
    ];
    // mui --------------------------

    const [search, setSearch] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div className="Container">
            <div className='Shadow'>
                <div className='HdContainer'>
                    <ul className='header'>
                        <li className='hdLogo'>
                            The<span style={{ color: 'orange' }}>Books</span>
                        </li>
                        <li className='hdSearch'>
                            <input
                                className='hdInput'
                                placeholder="Search Books Here ..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className='btnSearch'>Search</button>
                        </li>
                        <li className='hdUser'>
                            <FaRegHeart className='hdIcons' />
                            <AiOutlineShoppingCart
                                className='hdIcons'
                                onClick={() => {
                                    setShowCart(!showCart);
                                }}
                            />
                            <button onClick={() => {
                                handleLoginOnclick();
                            }} className='User'>
                                {/* mui----------------------------------------------  */}

                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="T" to="/Login" />
                                </StyledBadge>
                                {/* mui----------------------------------------------  */}

                                {/* User Name */}

                                <LoginProfile />
                            </button>
                        </li>
                    </ul>
                </div>

                <ul className='header'>
                    <li>
                        <ul className='navigation'>
                            <li className='styleNav'>
                                <Link className='link' to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='styleNav'>
                                <Link className='link' to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className='styleNav'>
                                <Link className='link' to="/">
                                    About Us
                                </Link>
                            </li>
                            <li className='styleNav'>
                                <Link className='link' to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className='btnTouch'>Get in Touch</button>
                    </li>
                </ul>
            </div>
            {/* cart----------------------------------------------------------- */}
            <div className="cart-container" hidden={showCart ? false : true} onClick={() => setShowCart(!showCart)}>
                <div className="Cart">
                    <h2>Cart</h2>
                    <form action="">
                        <table>
                            <thead className="product_head">
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Choose</th>
                                </tr>
                            </thead>
                            <tbody className="product_body">
                                {carts.map((e) => (
                                    <CartProduct
                                        key={e.id}
                                        id={e.productId}
                                        img={getProductById(e.productId)[0].imageUrl}
                                        name={getProductById(e.productId)[0].title}
                                        price={e.productPrice}
                                        quantity={e.quantity}
                                        cart={getCartById(e.id)[0]}
                                        token={token}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </form>
                    <div className="total">
                        <p>
                            <Link className='link' to="/cart">
                                View Cart
                            </Link>
                        </p>
                        <p>Total: </p>
                        <p>200</p>
                    </div>
                </div>
            </div>


            <div className="profile-container" hidden={showProfile ? false : true} onClick={() => setShowProfile(!showProfile)}>
                <ul className="Profile">
                    <li><Link to="/"><i><FaRegSun style={{ marginRight: 10 }} /></i>Setting</Link></li>
                    <li><Link to="/profile"><i><FaUser style={{ marginRight: 10 }} /></i>My Profile</Link></li>
                    <li><Link onClick={() => handleLogout()} to="/"><i><FaSignOutAlt style={{ marginRight: 10 }} /></i>LogOut</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/admin/category" element={<Category />} />
                <Route path="/admin/product" element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/description/:id" element={<Description />} />
                <Route path="/cart" element={<CartView />} />
            </Routes>

            {/* Footer */}

            <Box
                sx={{
                    height: 0,
                    transform: 'translateZ(0px)',
                    flexGrow: 1,
                    zIndex: 99,
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                }}
            >
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                    ))}
                </SpeedDial>
            </Box>

            <div className='ftMain'>
                <ul className='ftContainer'>
                    <li >
                        <h3 className='hdLogo'>
                            The<span style={{ color: 'orange' }}>Books</span>
                        </h3>
                        <p className='textRbt'>
                            TheBooks is a Book Store <br /> Ecommerce Website Template by <br /> DexignZone lorem ipsum
                            dolor sit.
                        </p>
                        <ul className='dsFlex ltStyle '>
                            <li>
                                <a className='ftIcons_cl1' href="/">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a className='ftIcons_cl1' href="/">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a className='ftIcons_cl1' href="/">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a className='ftIcons_cl1' href="/">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li >
                        <h4 className='titleFt'>Our Links</h4>
                        <div className='dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>About Us</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Contact US</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Privacy Policy</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Pricing Table</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>FAQ</p>
                        </div>
                    </li>

                    <li>
                        <h4 className='titleFt'>The Books ? </h4>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>The Books</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Services</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Book Details</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Blog Details</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Shop</p>
                        </div>
                    </li>

                    <li>
                        <h4 className='titleFt'>Resources</h4>
                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Download</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Help Center</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Shop Carts</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Login</p>
                        </div>

                        <div className='margin50 dsFlex'>
                            <div className='titleFt_icons'>
                                <FaAngleRight />
                            </div>
                            <p className='titleFt_text'>Partner</p>
                        </div>
                    </li>

                    <li>
                        <h4 className='titleFt'>Get in Touch With Us</h4>

                        <div className='withUS dsFlex'>
                            <div className='withUs_icons'>
                                <AiOutlineEnvironment />
                            </div>
                            <p className='withUs_text'>
                                Trảng Dài, Biên Hòa, <br /> Đồng Nai, Việt Nam
                            </p>
                        </div>

                        <div className='withUS dsFlex'>
                            <div className='withUs_icons'>
                                <AiOutlinePhone />
                            </div>
                            <p className='withUs_text'>
                                +84 817 251 666 <br /> +84 817 251 222
                            </p>
                        </div>

                        <div className='withUS dsFlex'>
                            <div className='withUs_icons'>
                                <AiOutlineMail />
                            </div>
                            <p className='withUs_text'>
                                thebooks@gmail.com <br /> support@thebooks.id
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
