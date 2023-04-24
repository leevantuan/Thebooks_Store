import React, { useEffect, useState } from 'react';
import './cart.scss';
import { FaStar } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { duration } from '@material-ui/core';
import CartProduct from './cartproduct';
import ProductItem from './productItem';
import { json } from 'react-router-dom';

const username = 'user@example.com';
export default function CartView() {
    const [products, setProduct] = useState([]);
    const [carts, setCart] = useState([]);
    const [showCart, setShowCart] = useState(true);
    useEffect(() => {
        fetch('https://thebookstore.azurewebsites.net/api/Products')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProduct(json);
            });

        fetch(`https://thebookstore.azurewebsites.net/api/Cart/username`, {
            method: 'get',
            headers: { username },
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setCart(json);
            });

        console.log(getProductById(28));
        const btn = Array.from(document.getElementsByClassName('btn_cart'));
        btn.forEach(function (button, index) {});
    }, []);
    const getProductById = (id) => {
        return products.filter((e) => e.id == id);
    };

    return (
        <div className="Cart-views">
            <h2>Cart</h2>
            <form action="">
                <table>
                    <thead className="product_head-views">
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Choose</th>
                        </tr>
                    </thead>
                    <tbody className="product_body-views">
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
                    <div className="total-views">
                        <p>Total: </p>
                        <p>$200</p>
                    </div>
                </table>
            </form>
            <div className="payment">
                <h2>Payment</h2>
                <form action="">
                    <textarea wrap="hard" placeholder={`Your's address`} required />
                    <label>Choose a payment method</label>
                    <div className="payment-offline">
                        <input type="checkbox" />
                        <p>Payment on delivery</p>
                    </div>

                    <div className="payment-page2">
                        <div className="payment-online">
                            <input type="checkbox" onClick={() => setShowCart(!showCart)} />
                            <p>Payment online</p>
                        </div>
                        <div className="cart-or-visa" hidden={showCart}>
                            <div className="name-cart">
                                <div className="i-pay">
                                    <input type="checkbox" />
                                    <img src={require('../assets/ipay-card.png')} alt="product" />
                                </div>
                                <div className="visa">
                                    <input type="checkbox" />
                                    <img src={require('../assets/visa.png')} alt="product" />
                                </div>
                            </div>
                            <div className="cart-number">
                                <label>Cart Number</label>
                                <input type="number" placeholder="Cart number" />
                            </div>
                            <div className="date-cart">
                                <div className="cart-number">
                                    <label>Expiration</label>
                                    <input type="text" placeholder="MM / YY" />
                                </div>
                                <div className="cart-number">
                                    <label>Security code</label>
                                    <input type="text" placeholder="123" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit">Payment</button>
                </form>
            </div>
        </div>
    );
}
