import React from 'react'
import SlideShow from './SlideShow'
import './home.scss'
import Page2Slider from './page2Slider'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";

export default function home() {
  return (
    <div className="homeContainer">
      <div className="sliderContai">
        <SlideShow />
        <div className="Page1">
          <ul className="Page1_content">
            <li className="item_logo">ELSEVIER</li>
            <li className="item_logo">PEARSON</li>
            <li className="item_logo">REUTERS</li>
            <li className="item_logo">PHOENIX</li>
            <li className="item_logo">WILEY</li>
          </ul>
        </div>

        <Page2Slider />
        <Page3 />
        <Page4 />
        <Page5 />
        <div className='bottom_page5'>
          <ul className="title_Page5">
              <li>
                  <i><FaUsers /></i>
                  <h2>998,589</h2>
                  <p>Happy Customers</p>
              </li>
              <li>
                  <i><FaBook /></i>
                  <h2>79,222</h2>
                  <p>Book Collections</p>

              </li>
              <li>
                  <i><FaStore /></i>
                  <h2>2,858</h2>
                  <p>Our Stores</p>

              </li>
              <li>
                  <i><FaHotjar /></i>
                  <h2>389</h2>
                  <p>Famous Writers</p>

              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}