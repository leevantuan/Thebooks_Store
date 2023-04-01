import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.scss'

class SliderFour extends Component {
    render() {
        var settings = {
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 8000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (

            <div className="slider_Page4">
                <div className="title_Page4">
                    <h2>Featured Product</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className="page4_Item">
                            <img src={require("../../../../assets/product.jpg")} alt="product" />
                            <div className="Right_Slider">
                                <p>
                                    BEST SELLER
                                </p>
                                <h2>Pushing Clouds</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
                                <div className="price">
                                    <h2>$12.4</h2>
                                    <h4>$16.8</h4>
                                    <p>25% OFF</p>
                                </div>
                                <div className="btn_Right">
                                    <button>Buy Now</button>
                                    <button>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="page4_Item">
                            <img src={require("../../../../assets/product1.jpg")} alt="product" />
                            <div className="Right_Slider">
                                <p>
                                    BEST SELLER
                                </p>
                                <h2>Pushing Clouds</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
                                <div className="price">
                                    <h2>$12.4</h2>
                                    <h4>$16.8</h4>
                                    <p>25% OFF</p>
                                </div>
                                <div className="btn_Right">
                                    <button>Buy Now</button>
                                    <button>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="page4_Item">
                            <img src={require("../../../../assets/product2.jpg")} alt="product" />
                            <div className="Right_Slider">
                                <p>
                                    BEST SELLER
                                </p>
                                <h2>Pushing Clouds</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
                                <div className="price">
                                    <h2>$12.4</h2>
                                    <h4>$16.8</h4>
                                    <p>25% OFF</p>
                                </div>
                                <div className="btn_Right">
                                    <button>Buy Now</button>
                                    <button>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="page4_Item">
                            <img src={require("../../../../assets/product1.jpg")} alt="product" />
                            <div className="Right_Slider">
                                <p>
                                    BEST SELLER
                                </p>
                                <h2>Pushing Clouds</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
                                <div className="price">
                                    <h2>$12.4</h2>
                                    <h4>$16.8</h4>
                                    <p>25% OFF</p>
                                </div>
                                <div className="btn_Right">
                                    <button>Buy Now</button>
                                    <button>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="page4_Item">
                            <img src={require("../../../../assets/product.jpg")} alt="product" />
                            <div className="Right_Slider">
                                <p>
                                    BEST SELLER
                                </p>
                                <h2>Pushing Clouds</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
                                <div className="price">
                                    <h2>$12.4</h2>
                                    <h4>$16.8</h4>
                                    <p>25% OFF</p>
                                </div>
                                <div className="btn_Right">
                                    <button>Buy Now</button>
                                    <button>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        );
    }
}
export default SliderFour;

