import styles from '../component.module.scss'
import { FaAngleRight } from "react-icons/fa";
import clsx from 'clsx';
import { useCallback, useState, useEffect } from 'react';
import loginCheck from '../Authen/loginCheck';




export default function Product() {
  const [cateList, setCateList] = useState([])
  const [cateName, setCateName] = useState("")
  const [cateDescription, setCateDescription] = useState("")
  useEffect(() => {
    fetch('https://thebookstore.azurewebsites.net/api/Category')
      .then((res) => res.json())
      .then((json) => {
        setCateList(json);
      });
  }, []);
  var token = localStorage.getItem('token');


  const id = 0;
  const name = "Truyen trinh tham"
  const description = "aaaaaaaaaaaaaaaaaaaaaa"
  const createDate = "2023-03-30T10:05:00.556Z"

  const AddCategory = () => {
    console.log(cateName)
    fetch('https://thebookstore.azurewebsites.net/api/Category', {
      method: 'post',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBlbWFpbC5jb20iLCJqdGkiOiI3YTYyNzkyMy1iNThjLTRkZGQtOWExYy1iZmY4ZTRjODFlMzYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY4MDE4MjQ4NSwiaXNzIjoiaHR0cHM6Ly90aGVib29rc3RvcmUuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJVc2VyIn0.E0F9bd8_MphTzhdtWIpqdFJ7AWPSmf06w243XdsNvZ8',
        'Content-Type': 'application/json'
      }
      ,
      body: JSON.stringify({
        id,
        name,
        description,
        createDate
      }),

    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      });
  }
  const [list, setList] = useState("");
  const [lists, setLists] = useState([]);

  const ramDomId = (min, max) => {
    return Math.floor(Math.random() * 100);
  }



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
            onChange={(e) => { setCateName(e.target.value) }}
            placeholder='Category name ... '
            required />
          <input
            onChange={(e) => { setCateDescription(e.target.value) }}
            placeholder='Description ... '
            required />
          <button
            onClick={() => AddCategory()}
            className={styles.btnTL_admin} >Add</button>
        </div>

        <ol className={styles.tlAdmin} >
          {cateList.map((e) => <li key={e.id}>{e.name}</li>)}
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
