import './admin.scss'
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useStepContext } from '@mui/material';

export default function Product() {
    const [cateList, setCateList] = useState([])
    const [products, setProduct] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [author, setAuthor] = useState('')
    const [isMeta, setIsMeta] = useState(false)
    const [price, setPrice] = useState(0)

    const [imgFile, setImgFile] = useState(null);

    //load category list
    useEffect(() => {
        fetch('https://localhost:7229/api/Category')
            .then((res) => res.json())
            .then((json) => {
                setCateList(json);
            });
    }, []);

    //load product list
    useEffect(() => {
        fetch('https://localhost:7229/api/Products')
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });
    }, []);

    //add product function
    const addProduct = () => {
        var id = 0;
        var imageUrl = '#';
        var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
        fetch('https://localhost:7229/api/Products/add', {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                title,
                description,
                price,
                quantity,
                imageUrl,
                category,
                author,
                isMeta,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            });
    }


    //Remove product

    const removeProduct = (id) => {

        alert('Bạn muốn xóa sản phẩm này?')
        var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
        fetch(`https://localhost:7229/api/Products/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        window.location = '/admin/product'
    }
    //editproduct 
    const editProduct = (id) => {
        var product = products.filter(e => e.id == id)
        var imageUrl = product[0].imageUrl
        var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
        fetch(`https://localhost:7229/api/Products/${id}`, {
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                title,
                description,
                price,
                quantity,
                imageUrl,
                category,
                author,
                isMeta,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            });
        window.location = '/admin/product'

    }
    const setInf = (id) => {
        var product = products.filter(e => e.id == id)
        var titleElement = document.querySelector("#titleinput");
        titleElement.value = product[0].title;
        setTitle(product[0].title)
        var desElement = document.querySelector("#desinput")
        desElement.value = product[0].description;
        setDescription(product[0].description)
        var authorElement = document.querySelector("#authorinput")
        authorElement.value = product[0].author;
        setAuthor(product[0].author)
        var priceElement = document.querySelector("#priceinput")
        priceElement.value = product[0].price;
        setPrice(product[0].price)
        var qElement = document.querySelector("#quantityinput")
        qElement.value = product[0].quantity;
        setQuantity(product[0].quantity)

    }
    //Add image
    const addImage = (id) => {
        var formdata = new FormData()
        formdata.append('file', imgFile)
        var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
        fetch(`https://localhost:7229/api/Products/${id}`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formdata,
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            });
        window.location = '/admin/product'
    }
    return (
        <>
            <div className='product-container'>
                <span>Thêm Sản Phẩm</span>
            </div>
            <form className='form-add'>
                <div className='form-input-product'>
                    <div className='form-item'>
                        <label >Title : </label>
                        <input
                            id='titleinput'
                            placeholder='Title ...' onChange={(e) => {
                                setTitle(e.target.value)
                            }} required />
                    </div>
                    <div className='form-item'>
                        <label >Category : </label>
                        <select id='catinput' onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                            {cateList.map((e) => <option key={e.id}>{e.name}</option>)}
                        </select>
                    </div>

                </div>
                <div className='form-input-product'>
                    <div className='form-item'>
                        <label >Author: </label>
                        <input id='authorinput' onChange={(e) => {
                            setAuthor(e.target.value)
                        }} placeholder='Author ...' required />
                    </div>
                    <div className='form-item'>
                        <label >IsMeta <input type="checkbox" onChange={(e) => {
                            setIsMeta(!isMeta)
                        }} /> </label>

                    </div>

                </div>

                <div className='form-input-product'>
                    <div className='form-item'>
                        <label >Description : </label>
                        <textarea id='desinput' onChange={(e) => {
                            setDescription(e.target.value)
                        }} placeholder='Description ...' required />
                    </div>
                    <div className='form-input-price'>
                        <div className='form-price'>
                            <label >Price : </label>
                            <input id='priceinput' onChange={(e) => {
                                setPrice(e.target.value)
                            }} placeholder='Price ...' type='number' required />
                        </div>

                        <div className='form-price'>
                            <label >Quantity : </label>
                            <input id='quantityinput' onChange={(e) => {
                                setQuantity(e.target.value)
                            }} placeholder='Quantity ...' type='number' required />
                        </div>
                    </div>
                </div>

                <button className='form-btn' onClick={() => { addProduct() }}>Add</button>
            </form>


            <ol className='product-list' >
                <input className='img-input' onChange={(e) => { setImgFile(e.target.files[0]) }} type='file' />
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
                            <tr onClick={() => { setInf(e.id) }} key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>#</td>
                                <td>{e.price}</td>
                                <td>{e.author}</td>
                                <td>{e.quantity}</td>
                                <td>#</td>
                                <td>{e.category}</td>
                                <td>
                                    <button
                                        onClick={() => { removeProduct(e.id) }}
                                    >X
                                    </button>
                                    <button
                                        onClick={() => { editProduct(e.id) }}
                                    >put
                                    </button>
                                    <button
                                        onClick={() => { addImage(e.id) }}
                                    >img
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ol>
        </>
    )

}