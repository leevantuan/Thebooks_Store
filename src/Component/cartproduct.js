import React from 'react'

export default function CartProduct(props) {
  return (
    <tr> 
        <td>
            <img src={props.img} alt="product" title={props.title}/>
            <p className="name_title">
              {props.name}  </p>
        </td> 
        
        <td>
            <h4> {props.price}</h4>
        </td> 
        <td> <input type="number" min="1" value="1"onChange={()=>{}}/> </td> 
        <td className="cart_delete"><span>X</span></td> 
    </tr>
  )
}
