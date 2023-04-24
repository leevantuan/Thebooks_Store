import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './home.scss'

class Page2Slider extends Component {
  render() {
    var settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (

            <div className="slider_Page2">
                <div className="title_Page2">
                    <h2>Recomended For You</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                </div>

                <Slider {...settings}>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product.jpg")} alt="product"/>
                        <h3>Thunder Stunt</h3>
                        <p>$20.50</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                    </div>
                </div>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product1.jpg")} alt="product"/>
                        <h3>Terrible</h3>
                        <p>$28.50</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                    </div>
                </div>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product2.jpg")} alt="product"/>
                        <h3>Take Tanga</h3>
                        <p>$26.80</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                    </div>
                </div>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product.jpg")} alt="product"/>
                        <h3>Thunder Stunt</h3>
                        <p>$20.50</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                    </div>
                </div>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product1.jpg")} alt="product"/>
                        <h3>Terrible</h3>
                        <p>$28.50</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                    </div>
                </div>
                <div>
                    <div className="page2_Item">
                        <img src={require("../assets/product2.jpg")} alt="product"/>
                        <h3>Take Tanga</h3>
                        <p>$26.80</p>
                        <div className="btn_home"><button>Add to cart</button></div>
                        
                    </div>
                </div>
                </Slider>
            </div>

    );
  }
}
export default Page2Slider;

