import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginCheck from '../../../Authen/loginCheck';

export default function ProductItem(props) {
    var token = loginCheck();
    const addToCart = () => {

        fetch(`https://localhost:7229/api/Cart/add/username?productId=${props.id}`, {
            method: 'post',
            headers: {
                'username': token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
            }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            });
        window.location = `/shop`
    }

    return (
        <>
            <Link className="product" to={`/Description/${props.id}`}>
                <img src={props.img} alt="product" />
                <h3>{props.name} </h3>
                <p>{props.description}</p>
                <ul>
                    <i>
                        <FaStar />
                    </i>
                    <i>
                        <FaStar />
                    </i>
                    <i>
                        <FaStar />
                    </i>
                    <i>
                        <FaStar />
                    </i>
                    <i>
                        <FaStar />
                    </i>
                </ul>
                <h1>
                    <p>${props.price}</p>
                </h1>
                <button className="btn_cart" onClick={() => { addToCart() }}>Add to cart</button>
            </Link>

        </>
    );
}
