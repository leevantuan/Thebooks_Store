import styles from '../component.module.scss'
import { FaAngleRight } from "react-icons/fa";
import clsx from 'clsx';
import { useState, useEffect } from 'react';

export default function Category() {
  const [cateList, setCateList] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  useEffect(() => {
    fetch('https://thebookstore.azurewebsites.net/api/Category')
      .then((res) => res.json())
      .then((json) => {
        setCateList(json);
      });
  }, []);



  const RemoveCategory = (id) => {
    alert(id)
    var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
    fetch(`https://thebookstore.azurewebsites.net/api/Category/${id}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      });

  }

  const AddCategory = () => {
    const id = 0;
    const createDate = Date.now();
    var token = JSON.parse(localStorage.getItem('token'))["accesstoken"];
    console.log(token);
    fetch('https://thebookstore.azurewebsites.net/api/Category', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${token}`,
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
            onChange={(e) => { setName(e.target.value) }}
            placeholder='Category name ... '
            required />
          <input
            onChange={(e) => { setDescription(e.target.value) }}
            placeholder='Description ... '
            required />
          <button
            onClick={() => AddCategory()}
            className={styles.btnTL_admin} >Add</button>
        </div>
        <ol className={styles.tlAdmin} >
          <table className={styles.pdCateTable}>

            <thead >
              <tr><th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>

            </thead>
            <tbody >
              {cateList.map(e =>
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.description}</td>
                  <td>
                    <button
                      onClick={() => RemoveCategory(e.id)}
                    >X
                    </button></td>
                </tr>
              )}
            </tbody>
          </table>
        </ol>

      </div>


    </>

  )
}
