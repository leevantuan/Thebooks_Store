import styles from '../component.module.scss'
import { FaAngleRight } from "react-icons/fa";
import clsx from 'clsx';

export default function Product() {
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
                    <label >Discription : </label>
                    <input placeholder='Discription ...' required />
                </div>

                <div className={styles.productItem}>
                    <label >Category : </label>
                    <select>
                        <option disabled={true} >Choose Category</option>
                        {/* {lists.map((e) => <option>{e.nameTl}</option>)} */}
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
        </>
    )

}