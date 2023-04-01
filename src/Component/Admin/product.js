import './admin.scss'
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Product() {
    const [cateList, setCateList] = useState([])
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://thebookstore.azurewebsites.net/api/Category')
            .then((res) => res.json())
            .then((json) => {
                setCateList(json);
            });
    }, []);


    useEffect(() => {
        fetch('https://thebookstore.azurewebsites.net/api/Products')
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });
    }, []);
    return (
        <>
            <div className='product-container'>
                <span>Thêm Sản Phẩm</span>
            </div>
            <form className='form-add'>
                <div className='form-input-product'>
                    <div className='form-item'>
                        <label >Title : </label>
                        <input placeholder='Title ...' required />
                    </div>
                    <div className='form-item'>
                        <label >Category : </label>
                        <select>
                            <option disabled={true} >Choose Category</option>
                            {cateList.map((e) => <option>{e.name}</option>)}
                        </select>
                    </div>

                </div>

                <div className='form-input-product'>
                    <div className='form-item'>
                        <label >Description : </label>
                        <input placeholder='Description ...' required />
                    </div>
                    <div className='form-input-price'>
                        <div className='form-price'>
                            <label >Price : </label>
                            <input placeholder='Price ...' required />
                        </div>

                        <div className='form-price'>
                            <label >Quantity : </label>
                            <input placeholder='Quantity ...' required />
                        </div>
                    </div>
                </div>

                <button className='form-btn'>Submit</button>
            </form>

            <ol className='product-list' >
                <table>

                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            <th>ImageUrl</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody >
                        {products.map(e =>
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.Name}</td>
                                <td>{e.description}</td>
                                <td>{e.Price}</td>
                                <td>{e.Author}</td>
                                <td>{e.Quantity}</td>
                                <td>{e.ImgUrl}</td>
                                <td>{e.Category}</td>
                                <td>
                                    <button
                                        onClick={() => { }}
                                    >X
                                    </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ol>
        </>
    )

}