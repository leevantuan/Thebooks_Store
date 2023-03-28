import { useState, useEffect } from "react";



export default function GetCategory() {
    const [cateList, setCateList] = useState([])
    useEffect(() => {
        fetch('https://thebookstore.azurewebsites.net/api/Category')
            .then((res) => res.json())
            .then((json) => {
                setCateList(json);
            })
    }, []);
    return cateList;
}