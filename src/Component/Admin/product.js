import styles from '../component.module.scss'
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
            <div className={styles.pdTitle}>
                <span className={styles.pdTitle_icons}><FaAngleRight /></span>
                <h2 className={styles.pdTitle_text}>Thêm Sản Phẩm</h2>
            </div>
            <form className={styles.pdAdd}>
                <div className={styles.productItem}>
                    <label >Title : </label>
                    <input placeholder='Title ...' required />
                </div>

                <div className={styles.productItem}>
                    <label >Description : </label>
                    <input placeholder='Description ...' required />
                </div>

                <div className={styles.productItem}>
                    <label >Category : </label>
                    <select>
                        <option disabled={true} >Choose Category</option>
                        {cateList.map((e) => <option>{e.name}</option>)}
                    </select>
                </div>

                <div className={styles.productItem}>
                    <label >Price : </label>
                    <input placeholder='Price ...' required />
                </div>

                <div className={styles.productItem}>
                    <label >Quantity : </label>
                    <input placeholder='Quantity ...' required />
                </div>

                <button className={styles.pdAddBtn}>Sumit</button>
            </form>

            <ol className={styles.tlAdmin} >
                <table className={styles.pdCateTable}>

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
                        </tr>

                    </thead>
                    <tbody >
                        {products.map(e =>
                            <tr key={e.id}>
                                <th>{e.id}</th>
                                <th>{e.Name}</th>
                                <th>{e.description}</th>
                                <th>{e.Price}</th>
                                <th>{e.Author}</th>
                                <th>{e.Quantity}</th>
                                <th>{e.ImgUrl}</th>
                                <th>{e.Category}</th>
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