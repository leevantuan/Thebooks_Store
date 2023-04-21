import React from 'react';
import { FaStar } from 'react-icons/fa';
import SliderTwo from '../../Home/Carousel/SliderTwo';
import './description.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import loginCheck from '../../../Authen/loginCheck.js'


export default function Description() {
    const [product, setProduct] = useState({
        title: 'unknow',
        description: 'unknow',
        price: 'unknow',
        quantity: 'unknow',
        author: 'unknow',
        imageurl: 'unknow',

    });
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://localhost:7229/api/Products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });
    }, []);


    const addToCart = () => {
        var token = loginCheck()
        fetch(`https://localhost:7229/api/Cart/add/username?productId=${id}`, {
            method: 'post',
            headers: {
                'username': token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
            }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            });
    }
    return (
        <div className="description-container">
            <div className="description-content">
                <div className="content-left">
                    <img src={product.imageUrl} alt="product" />
                </div>
                <div className="content-right">
                    <h1>
                        {product.title}
                    </h1>
                    <p>by {product.author}</p>
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
                    <span>{product.price}</span>
                    <p className='des'>
                        {product.description}
                    </p>
                    <div className='action-btn'>
                        <button onClick={() => { addToCart() }}>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>

            {/* ----------------------------------------- */}
            <div className="custom-page2">
                <p></p>
                <SliderTwo />
            </div>
        </div>
    );
}
