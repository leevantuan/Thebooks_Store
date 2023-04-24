import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";

import { FaBolt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThemeco } from "react-icons/fa";

import Slider from "react-slick";
import './home.scss'

class Page3 extends Component {
  render() {
    var settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (

        <div className="Main_page3">
            <div className="slider_Page3">
                <ul className="title_Page3">
                    <li>
                        <i><FaBolt /></i>
                        <h2>Quick Delivery</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>
                    </li>
                    <li>
                        <i><FaThemeco /></i>
                        <h2>Secure Payment</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>

                    </li>
                    <li>
                        <i><FaThumbsUp /></i>
                        <h2>Best Quality</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>

                    </li>
                    <li>
                        <i><FaStar /></i>
                        <h2>Return Guarantee</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>

                    </li>
                </ul>
                <div className="title_page3_sale">Books on Sale</div>
                <Slider {...settings}>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product.jpg")} alt="product"/>
                        <h3>Thunder Stunt</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product1.jpg")} alt="product"/>
                        <h3>Terrible</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product2.jpg")} alt="product"/>
                        <h3>Take Tanga</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product.jpg")} alt="product"/>
                        <h3>Thunder Stunt</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product1.jpg")} alt="product"/>
                        <h3>Terrible</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="page3_Item">
                        <img src={require("../assets/product2.jpg")} alt="product"/>
                        <h3>Take Tanga</h3>
                        <p>SPORTS , DRAMA</p>
                        <div className="Evaluate"> 
                            <h3><FaStar/> <p>2.8</p></h3>
                            <h3>
                                <p>$5.5</p>
                                <p>$12.8</p>
                            </h3>
                        </div>
                        
                    </div>
                </div>
                </Slider>
            </div>
        </div>

    );
  }
}
export default Page3;

