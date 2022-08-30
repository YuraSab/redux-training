import React from 'react';
import styles from "./Product.module.css";


const Product = ({item}) => {

    // id
    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}


  return (
    <div className={styles.itemDiv} >
         <img className={styles.itemImg} src={item.image} alt={item.title}/>
        <div>
           {item.title}
       </div>
    </div>


  )
}

export { Product }