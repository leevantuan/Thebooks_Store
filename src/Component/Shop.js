import React, { useEffect } from 'react'
import './shop.scss'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { duration } from '@material-ui/core';
import CartProduct from './cartproduct';
import ProductItem from './productItem';

const data = [
    {
        id: "1",
        img:  "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder Stunt",
        price: "54.78",
        title:  "Thunder Stunt",
},
    {
        id: "2",
        img:  "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder bolt",
        price: "20.00",
        title:  "Thunder Stunt",
},
    {
        id: "3",
        img:  "http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg",
        name: "Thunder bolt",
        price: "20.00",
        title:  "Thunder Stunt",
},
]
export default function Shop() {
    useEffect(() => {
        const btn = Array.from(
          document.getElementsByClassName('btn_cart')
        );
        
        btn.forEach(function (button , index) {
            button.addEventListener("click" , function(e) {
                var btnItem = e.target;
                // goi toi the cha cua product
                var product = btnItem.parentElement;
                //lay du lieu tu trong product
                var productImg = product.querySelector('img').src ;
                var productName = product.querySelector('h2').innerText ;
                var productPrice = product.querySelector('h1 p:nth-child(1)').innerText ;
                // console.log(productImg,productName,productPrice)
                //add vao add cart
                addCart(productImg,productName,productPrice)
            })           
        })

        function addCart(productImg,productName,productPrice) {
            var addTr = document.createElement('tr');
            // var cartItem = document.querySelectorAll('.product_body tr')
            // for ( var i = 0 ; i < cartItem.length; i++) {
            //     var productT = document.querySelectorAll(".name_title")
            //     if (productT[i].innerHTML === productName) {
            //         alert("san pham cua ban da co")
            //         return;
            //     }
            // }W
            // var trContent = '<tr> <td><img src="'+ productImg +'" alt="product" title="Thunder stuns"/><p className="name_title">'
            //  + productName + '</p></td> <td><h4>' + productPrice +
            //  '</h4></td> <td> <input type="number" min="1" value="1"  /> </td> <td className="cart_delete"><span>X</span></td> </tr>'

            // var trContent = <Cartproduct img = {productImg}  title = {productName} name = {productName} price = {productPrice} />
            // //them the vao trong tr va xuat ra
            // addTr.innerHTML = trContent;

            addTr.innerHTML = <CartProduct img={productImg} title={productName} name={productName} price={productPrice} />
            console.log(<CartProduct />)  `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     `
            
            var cartTable = document.querySelector('tbody');
            
            cartTable.append(addTr)
            //them the tr vao duoi cung
        }
        function cartTotal() {
            var totalAll = 0;
            var cartItem = document.querySelectorAll('.product_body tr')
            // console.log(cartItem)
            for ( var i = 0 ; i < cartItem.length; i++) {
                var inputValue = cartItem[i].querySelector('.product_body tr td input').value;
                var inputPrice = cartItem[i].querySelector('.product_body tr td h4').innerHTML;
                var totalA = inputValue * inputPrice;
                totalAll += totalA;
                // console.log(totalAll)
            }
        }
        function deleteCart() {
            var cartItem = document.querySelectorAll('.product_body tr')
            for ( var i = 0 ; i < cartItem.length; i++) {
                var productDL = document.querySelectorAll(".cart_delete")
                    productDL[i].addEventListener('click' , function(e) {
                        var cartDelete = e.target;
                        var cartItemDL = cartDelete.parentElement.parentElement;
                        cartItemDL.remove();
                    })
                }
        }

        
      }, []);


  return (
    <div className='container'>
            <h2 className='title'>Books</h2>      
            <div className='content'>
               {data.map((e) =>
                <ProductItem key={e.id} img = {e.img} name={e.name} descriptiom = {e.title} price = {e.price} />
               )}

                {/* <div className='product'>
                    <img src={require("../assets/product2.jpg")} alt="product"/>
                    <h2>Thunder Stunt</h2>
                    <p>ADVANTURE, SCIENCE</p>
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <h1>
                        <p>54.78</p>
                        <p>70.00</p>
                    </h1>
                    <button className='btn_cart' >Add to cart</button>
                    <div>
                        <i><FaRegHeart /></i>
                    </div>
                </div>

                <div className='product'>
                    <img src={require("../assets/product1.jpg")} alt="product"/>
                    <h2>Thunder Stunt</h2>
                    <p>ADVANTURE, SCIENCE</p>
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <h1>
                        <p>54.78</p>
                        <p>70.00</p>
                    </h1>
                    <button className='btn_cart'>Add to cart</button>
                    <div>
                        <i><FaRegHeart /></i>
                    </div>
                </div>

                <div className='product'>
                    <img src={require("../assets/product2.jpg")} alt="product"/>
                    <h2>Thunder Stunt</h2>
                    <p>ADVANTURE, SCIENCE</p>
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <h1>
                        <p>54.78</p>
                        <p>70.00</p>
                    </h1>
                    <button className='btn_cart'>Add to cart</button>
                    <div>
                        <i><FaRegHeart /></i>
                    </div>
                </div> */}
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
