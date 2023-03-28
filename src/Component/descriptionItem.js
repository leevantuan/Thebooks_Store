import React from 'react';
import { FaStar } from 'react-icons/fa';
import Page2Slider from './page2Slider';
import './description.scss';

export default function Description(props) {
    return (
        <div className="description-container">
            <div className="description-content">
                <div className="content-left">
                    <img src={require('../assets/product2.jpg')} alt="product" />
                </div>
                <div className="content-right">
                    <h2>
                        Hippity, Hoppity, Little Bunny - Finger Puppet Board Book for Easter Basket Gifts or Stuffer
                        Ages 0-3 (Finger Puppet Book)
                    </h2>
                    <p>by Cottage Door Press (Author, Editor)</p>
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
                    <span>$500</span>
                    <p>
                        Look no further than Hippity, Hoppity, Little Bunny for adorable nursery rhyme books. Follow the
                        little bunny rabbit and its adorable bird friends in this finger puppet book as they hunt for
                        Easter eggs. Wiggle the puppet to make the bunny in the story come alive! Boys and girls will
                        love this board book surprise this holiday! Collect the entire series in the Finger Puppet
                        Collection from Cottage Door Press!
                    </p>
                    <div>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>

            {/* ----------------------------------------- */}
            <div className="custom-page2">
                <p></p>
                <Page2Slider />
            </div>
        </div>
    );
}
