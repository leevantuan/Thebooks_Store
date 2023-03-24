import React, { useEffect, useState } from 'react'
import './shop.scss'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { duration } from '@material-ui/core';
import CartProduct from './cartproduct';
import ProductItem from './productItem';
import { json } from 'react-router-dom';



const cartData = [
    {
        id: "1",
        img: "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder Stunt",
        price: 54.78,
        title: "Thunder Stunt",
        quantity: 2
    },
    {
        id: "2",
        img: "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder bolt",
        price: 20.00,
        title: "Thunder Stunt",
        quantity: 2
    },
    {
        id: "3",
        img: "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder bolt",
        price: 40.00,
        title: "Thunder Stunt",
        quantity: 2
    },
]
const username = "user@example.com";
export default function Shop() {
    const [products, setProduct] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch(
            "https://thebookstore.azurewebsites.net/api/Products")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setProduct(json);
            })
        
        
        fetch(`https://thebookstore.azurewebsites.net/api/Cart/username`,{
            method:"get",
            headers: {username},
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setCart(json);
        })

        
        console.log(getProductById(28))
        const btn = Array.from(
            document.getElementsByClassName('btn_cart')
        );
        btn.forEach(function (button, index) {
            // button.addEventListener("click", function (e) {
            //     var btnItem = e.target;
            //     // goi toi the cha cua product
            //     var product = btnItem.parentElement;
            //     //lay du lieu tu trong product
            //     var productImg = product.querySelector('img').src;
            //     var productName = product.querySelector('h2').innerText;
            //     var productPrice = product.querySelector('h1 p:nth-child(1)').innerText;
            //     // console.log(productImg,productName,productPrice)
            //     //add vao add cart
            //     addCart(productImg, productName, productPrice)
            // })
        })

        function addCart(productImg, productName, productPrice) {

        }
        function cartTotal() {
            var totalAll = 0;
            var cartItem = document.querySelectorAll('.product_body tr')
            // console.log(cartItem)
            for (var i = 0; i < cartItem.length; i++) {
                var inputValue = cartItem[i].querySelector('.product_body tr td input').value;
                var inputPrice = cartItem[i].querySelector('.product_body tr td h4').innerHTML;
                var totalA = inputValue * inputPrice;
                totalAll += totalA;
                // console.log(totalAll)
            }
        }
        function deleteCart() {
            var cartItem = document.querySelectorAll('.product_body tr')
            for (var i = 0; i < cartItem.length; i++) {
                var productDL = document.querySelectorAll(".cart_delete")
                productDL[i].addEventListener('click', function (e) {
                    var cartDelete = e.target;
                    var cartItemDL = cartDelete.parentElement.parentElement;
                    cartItemDL.remove();
                })
            }
        }


    }, []);
    const getProductById = (id) =>{
        return products.filter(e=>e.id == id);
    }

    return (
        <div className='container'>
            <div className='content'>
                {products.map((e) =>
                    <ProductItem 
                    key={e.id}
                     img={"http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg"}
                      name={e.title}
                       descriptiom={e.descriptiom}
                        price={e.price} />
                )}


            </div>

            <div className='Cart'>
                <h2>Cart</h2>
                <form action='' >
                    <table>
                        <thead className='product_head'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Choose</th>
                            </tr>
                        </thead>
                        <tbody className='product_body'>
                            {/* <tr>
                                <td><img 
                                    src={require("../assets/product.jpg")} 
                                    alt="product" 
                                    title='Thunder stunt'/><p className="name_title" >Thunder stunt</p></td>
                                <td><h4>54.70</h4></td>
                                <td>
                                    <input type="number" min="1"/>
                                </td>
                                <td>X</td>
                            </tr> */}
                            {
                                carts.map(e =>
                                    // <tr key={e.id}>
                                    //     <td><img
                                    //         src={require("../assets/product.jpg")}
                                    //         alt="product"
                                    //         title={e.name} /><p className="name_title" >Thunder stunt</p></td>
                                    //     <td><h4>{e.price * e.quantity}</h4></td>
                                    //     <td>
                                    //         <input type="number" onChange={() => { }} value={e.quantity} min="1" />
                                    //     </td>
                                    //     <td>X</td>
                                    // </tr>
                                    <CartProduct 
                                    key = {e.id}
                                    img ={"https://thebookimage.blob.core.windows.net/productimg/product_28"} 
                                    name={getProductById(e.productId)[0].title} 
                                    price = {e.price}
                                    quantity = {e.quantity}
                                      />
                                    )
                            }
                        </tbody>
                    </table>
                    <div className='total'>
                        <p>Total: </p>
                        <p>200</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
