import React, { useEffect, useState } from 'react';
import './cart.scss';
import loginCheck from '../../Authen/loginCheck';

import CartProduct from './Item/cartproduct';

var token = loginCheck();

const username = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
export default function CartView() {
    const [products, setProduct] = useState([]);
    const [carts, setCart] = useState([]);
    const [showCart, setShowCart] = useState(true);
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
    const getProductById = (id) => {
        return products.filter((e) => e.id == id);
    };
    const getCartById = (id) => {
        return carts.filter((e) => e.id == id);
    }

    var totalPrice = 0;
    carts.forEach(e => {
        totalPrice += (e.productPrice * e.quantity)
    });
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
                <div className="total-views">
                    <p>Total: </p>
                    <p>$ {totalPrice}</p>
                </div>
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
                                    <img src={require('../../../assets/ipay-card.png')} alt="product" />
                                </div>
                                <div className="visa">
                                    <input type="checkbox" />
                                    <img src={require('../../../assets/visa.png')} alt="product" />
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

                    <button type="submit">Buy Now</button>
                </form>
            </div>
        </div>
    );
}
