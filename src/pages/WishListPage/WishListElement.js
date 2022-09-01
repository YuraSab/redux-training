import React from 'react';
import {Link} from "react-router-dom";
import styles from "../../components/Products/Product/Product.module.css";

const WishListElement = ({item}) => {

    // id
    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}


    return (
        <Link
            to={`/products/${item.id}`}
            style={{textDecoration: 'none'}}
        >
            <div className={styles.itemDiv}>
                <div>
                    <img className={styles.itemImg} src={item.image} alt={item.title}/>
                </div>
                <div className={styles.title}>
                    {item.title}
                </div>
                {/*<div className={styles.price}>*/}
                {/*    Rating: {item.rating.rate} (voted: {item.rating.count})*/}
                {/*</div>*/}
                <div className={styles.price}>
                    <b>{item.price} $</b>
                </div>
            </div>
        </Link>


    )
}

export { WishListElement }