import React from 'react';
import loginCheck from '../../../Authen/loginCheck';



export default function CartProduct(props) {
    var token = loginCheck()
    var id = props.id;
    const handleChange = (value) => {

        if (value > props.cart.quantity) {
            fetch(`https://localhost:7229/api/Cart/add/username?productId=${id}`, {
                method: 'post',
                headers: {
                    'username': token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                });
            window.location = `/cart?`
        } else {
            fetch(`https://localhost:7229/api/Cart/remove/username?productId=${id}`, {
                method: 'post',
                headers: {
                    'username': token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                });
            window.location = `/cart?`
        }
    }

    const handleRemove = () => {

        fetch(`https://localhost:7229/api/Cart/removeall/username?productId=${id}`, {
            method: 'post',
            headers: {
                'username': token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
            }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            });
        window.location = `/cart?`

    }


    return (
        <tr>
            <td>
                <img src={props.img} alt="product" title={props.title} />
                <p className="name_title">{props.name} </p>
            </td>

            <td>
                <h4> {props.price}</h4>
            </td>
            <td>
                {' '}
                <input type="number" defaultValue={props.quantity} onChange={(e) => { handleChange(e.target.value) }} />{' '}
            </td>
            <td className="cart_delete">
                <span onClick={() => { handleRemove() }}>X</span>
            </td>
        </tr>
    );
}
