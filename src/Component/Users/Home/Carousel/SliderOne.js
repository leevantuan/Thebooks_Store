import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.scss'

class SliderOne extends Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (

      <div className="slider">
        <Slider {...settings}>
          <div className="slideShow">
            <img src={require("../../../../assets/Slider2.png")} alt="slide" />
            <div className="Position_Slider">
              <div className="title_slideShow">
                BEST SELLER
              </div>
              <h2>Pushing Clouds</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
              <div className="price_page1">
                <h2>$12.4</h2>
                <h4>$16.8</h4>
                <p>25% OFF</p>
              </div>
              <div className="btn_slidedShow">
                <button>Buy Now</button>
                <button>See Details</button>
              </div>
            </div>

          </div>

          <div className="slideShow">
            <img src={require("../../../../assets/Slider1.png")} alt="slide" />
            <div className="Position_Slider">
              <div className="title_slideShow">
                BEST SELLER
              </div>
              <h2>Pushing Clouds</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</h3>
              <div className="price_page1">
                <h2>$12.4</h2>
                <h4>$16.8</h4>
                <p>25% OFF</p>
              </div>
              <div className="btn_slidedShow">
                <button>Buy Now</button>
                <button>See Details</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

    );
  }
}
export default SliderOne;

