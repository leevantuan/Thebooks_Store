import React, { useEffect, useState } from 'react';
import './shop.scss';

import { FaBars } from 'react-icons/fa';

import ProductItem from './productItem';


const username = 'user@example.com';
export default function Shop() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://thebookstore.azurewebsites.net/api/Products')
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });

        fetch(`https://thebookstore.azurewebsites.net/api/Cart/username`, {
            method: 'get',
            headers: { username },
        })
            .then((res) => res.json())
            .then((json) => {
            });
        const btn = Array.from(document.getElementsByClassName('btn_cart'));
        btn.forEach(function (button, index) { });
    }, []);

    const handleFT = (e) => {
        const nameFT = e.target.value;
        if (e.target.checked === true) {
            // const product = products.filter((event) => event.title === nameFT);
            alert(nameFT);
        } else {
            alert('none');
        }
    };
    return (
        <div className="container">
            <div className="filter-product">
                <ul>
                    Tac Gia
                    <li>
                        <input type="checkbox" onClick={handleFT} value="Conan" />
                        Conan
                    </li>
                    <li>
                        <input type="checkbox" onClick={handleFT} value="Doraemon" />
                        Doraemon
                    </li>
                    <li>
                        <input type="checkbox" />
                        Tac gia 3
                    </li>
                </ul>
                <ul>
                    Series
                    <li>
                        <input type="checkbox" />
                        Series 1
                    </li>
                    <li>
                        <input type="checkbox" />
                        Series 2
                    </li>
                    <li>
                        <input type="checkbox" />
                        Series 3
                    </li>
                </ul>
                <ul>
                    Name
                    <li>
                        <input type="checkbox" />
                        Name 1
                    </li>
                    <li>
                        <input type="checkbox" />
                        Name 2
                    </li>
                    <li>
                        <input type="checkbox" />
                        Name 3
                    </li>
                </ul>
            </div>
            <div className="title_books">
                <button>
                    <p>All</p>
                    <i>
                        <FaBars />
                    </i>
                </button>
                <p>BOOKS</p>
            </div>
            <div className="content">
                {products.map((e) => (
                    <ProductItem
                        key={e.id}
                        img={'http://localhost:3000/static/media/product.061b9fb8d8537506d31d.jpg'}
                        name={e.title}
                        descriptiom={e.descriptiom}
                        price={e.price}
                    />
                ))}
            </div>
        </div>
    );
}
