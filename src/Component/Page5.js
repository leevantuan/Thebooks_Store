import React, { Component } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="slider_Page5" >
        <div className="Page5">
            <h2>Testimonials</h2>
            <h4>Comment</h4>
            <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            >
            <div>
                <div className="page5_item">
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                    <div className="user_page5">
                        <div className="avatar_page">

                        </div>
                        <p>Name One</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="page5_item">
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                    <div className="user_page5">
                        <div className="avatar_page">

                        </div>
                        <p>Name Two</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="page5_item">
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                    <div className="user_page5">
                        <div className="avatar_page">

                        </div>
                        <p>Name Three</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="page5_item">
                    <ul>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </ul>
                    <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                    <div className="user_page5">
                        <div className="avatar_page">

                        </div>
                        <p>Name Four</p>
                    </div>
                </div>
            </div>
            </Slider>
            <h4>User Name</h4>
            <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            autoplay={true}
            >
            <div>
                <div className="user_page5_2">
                    <div>

                    </div>
                    <p>Name One</p>
                </div>
            </div>
            <div>
            <div className="user_page5_2">
                    <div>

                    </div>
                    <p>Name Two</p>
                </div>
            </div>
            <div>
            <div className="user_page5_2">
                    <div>

                    </div>
                    <p>Name Three</p>
                </div>
            </div>
            <div>
            <div className="user_page5_2">
                    <div>

                    </div>
                    <p>Name Four</p>
                </div>
            </div>
            </Slider>
        </div>
      </div>
    );
  }
}