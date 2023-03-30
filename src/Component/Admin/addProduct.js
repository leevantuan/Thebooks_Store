import styles from './component.module.scss'
import { FaAngleRight } from "react-icons/fa";
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import GetCategory from './fetchData/getCategory';

export default function Product() {

  var cateList = GetCategory();
  console.log(cateList);

  const [list, setList] = useState("");
  const [lists, setLists] = useState([]);

  const ramDomId = (min, max) => {
    return Math.floor(Math.random() * 100);
  }
  const HandleClick = useCallback(() => {
    const ramDomIdTl = ramDomId(0, 100);
    setLists([...lists, { id: ramDomIdTl, nameTl: list }]);
    setList("")
  }, [list, lists])


  const HandleInput = useCallback((e) => {
    setList(e.target.value);
  }, [])

  return (
    <>
      <div className={styles.pdTitle}>
        <span className={styles.pdTitle_icons}><FaAngleRight /></span>
        <h2 className={styles.pdTitle_text}>Thể Loại</h2>
      </div>



      <div className={styles.pdContainer}>

        <div className={clsx(styles.type, styles.dsFlex)}>
          <label>Thể Loại</label>
          <input
            onChange={HandleInput}
            value={list}
            placeholder='Nhập thể loại tại đây ... '
            required />
          <button
            disabled={!list}
            onClick={HandleClick}
            className={styles.btnTL_admin} >Add</button>


        </div>

        <ol className={styles.tlAdmin} >
          {lists.map((e) => <li key={e.id}>{e.nameTl}</li>)}
        </ol>

      </div>

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
            {lists.map((e) => <option>{e.nameTl}</option>)}
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
