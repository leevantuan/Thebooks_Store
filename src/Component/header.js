import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
//Icons
import { FaRegHeart } from 'react-icons/fa';
// import { FaRegUserCircle } from "react-icons/fa";
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

//-------------avatar
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

//----------------------
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';

//-----------------------------------

import Home from './home';
import Login from './login';
import Product from './Admin/addProduct';
import Shop from './Shop';
// import SignUp from './SignUp'
import styles from './component.module.scss';
import CartView from './CartView';
import Description from './descriptionItem';
import loginCheck from './Authen/loginCheck';

import './shop.scss';

import CartProduct from './cartproduct';
import ProductItem from './productItem';


export default function Headers(props) {
    var token = loginCheck();
    const [products, setProduct] = useState([]);
    const [carts, setCart] = useState([]);
    var username = "";
    useEffect(() => {
        if (token) {
            username = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
            console.log(username)
            fetch(`https://thebookstore.azurewebsites.net/api/Cart/username`, {
                method: 'get',
                headers: { username },
            })
                .then((res) => res.json())
                .then((json) => {
                    setCart(json);
                });
        }

        fetch('https://thebookstore.azurewebsites.net/api/Products')
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });
    }, []);
    const getProductById = (id) => {
        return products.filter((e) => e.id == id);
    };

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

    return (
        <div className={styles.Container}>
            <div className={styles.Shadow}>
                <div className={styles.HdContainer}>
                    <ul className={styles.header}>
                        <li className={styles.hdLogo}>
                            The<span style={{ color: 'orange' }}>Books</span>
                        </li>
                        <li className={styles.hdSearch}>
                            <input
                                className={styles.hdInput}
                                placeholder="Search Books Here ..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className={styles.btnSearch}>Search</button>
                        </li>
                        <li className={styles.hdUser}>
                            <FaRegHeart className={styles.hdIcons} />
                            <AiOutlineShoppingCart
                                className={styles.hdIcons}
                                onClick={() => {
                                    setShowCart(!showCart);
                                }}
                            />
                            <Link to="/Login" className={styles.User}>
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
                                <p style={{ color: '#1c0083', fontWeight: 'bold' }}>{username}</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className={styles.header}>
                    <li>
                        <ul className={styles.navigation}>
                            <li className={styles.styleNav}>
                                <Link className={styles.link} to="/">
                                    Home
                                </Link>
                            </li>
                            <li className={styles.styleNav}>
                                <Link className={styles.link} to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className={styles.styleNav}>
                                <Link className={styles.link} to="/">
                                    About Us
                                </Link>
                            </li>
                            <li className={styles.styleNav}>
                                <Link className={styles.link} to="/">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className={styles.btnTouch}>Get in Touch</button>
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
                                        img={'https://thebookimage.blob.core.windows.net/productimg/product_28'}
                                        name={getProductById(e.productId)[0].title}
                                        price={e.price}
                                        quantity={e.quantity}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </form>
                    <div className="total">
                        <p>
                            <Link className={styles.link} to="/cart">
                                View Cart
                            </Link>
                        </p>
                        <p>Total: </p>
                        <p>200</p>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Product />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<CartView />} />
                <Route path="/description" element={<Description />} />
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

            <div className={styles.ftMain}>
                <ul className={styles.ftContainer}>
                    <li className={styles.mxh}>
                        <h3 className={styles.hdLogo}>
                            The<span style={{ color: 'orange' }}>Books</span>
                        </h3>
                        <p className={styles.textRbt}>
                            TheBooks is a Book Store <br /> Ecommerce Website Template by <br /> DexignZone lorem ipsum
                            dolor sit.
                        </p>
                        <ul className={clsx(styles.dsFlex, styles.ltStyle)}>
                            <li>
                                <a className={styles.ftIcons_cl1} href="/">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a className={styles.ftIcons_cl1} href="/">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a className={styles.ftIcons_cl1} href="/">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a className={styles.ftIcons_cl1} href="/">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className={styles.ourLinks}>
                        <h4 className={styles.titleFt}>Our Links</h4>
                        <div className={styles.dsFlex}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>About Us</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Contact US</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Privacy Policy</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Pricing Table</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>FAQ</p>
                        </div>
                    </li>

                    <li>
                        <h4 className={styles.titleFt}>The Books ? </h4>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>The Books</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Services</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Book Details</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Blog Details</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Shop</p>
                        </div>
                    </li>

                    <li>
                        <h4 className={styles.titleFt}>Resources</h4>
                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Download</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Help Center</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Shop Carts</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Login</p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.margin50)}>
                            <div className={styles.titleFt_icons}>
                                <FaAngleRight />
                            </div>
                            <p className={styles.titleFt_text}>Partner</p>
                        </div>
                    </li>

                    <li>
                        <h4 className={styles.titleFt}>Get in Touch With Us</h4>

                        <div className={clsx(styles.dsFlex, styles.withUS)}>
                            <div className={styles.withUs_icons}>
                                <AiOutlineEnvironment />
                            </div>
                            <p className={styles.withUs_text}>
                                Trảng Dài, Biên Hòa, <br /> Đồng Nai, Việt Nam
                            </p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.withUS)}>
                            <div className={styles.withUs_icons}>
                                <AiOutlinePhone />
                            </div>
                            <p className={styles.withUs_text}>
                                +84 817 251 666 <br /> +84 817 251 222
                            </p>
                        </div>

                        <div className={clsx(styles.dsFlex, styles.withUS)}>
                            <div className={styles.withUs_icons}>
                                <AiOutlineMail />
                            </div>
                            <p className={styles.withUs_text}>
                                thebooks@gmail.com <br /> support@thebooks.id
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
