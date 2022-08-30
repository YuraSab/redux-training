import React from 'react';
import styles from "./Product.module.css";
import {Link, useLocation} from "react-router-dom";


const Product = ({item}) => {

    // id
    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}


    const {pathname} = useLocation();

    return (
        <Link  to={`${pathname}/${item.id}`} style={{textDecoration: 'none'}}>
            <div className={styles.itemDiv}>
                <div>
                    <img className={styles.itemImg} src={item.image} alt={item.title}/>
                </div>
                <div className={styles.title}>
                    {item.title}
                </div>
            </div>
        </Link>


    )
}

export {Product}