import React, {useEffect, useState} from 'react';
import styles from "./OneProductPage.module.css";
import {useParams} from "react-router-dom";
import {ProductService} from "../../services/Product-service";

const OneProductPage = () => {

    const {id} = useParams();

    const [item, setItem] = useState('');

    const productService = new ProductService();

    const getOneProduct = async () => {
        const product = await productService.getProductById(id);
        setItem(product);
    }


    useEffect(() => {
        getOneProduct();
    }, [id]);


    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}
    // price



    return (
        <div className={styles.mainDiv}>
            <div className={styles.title}>
                {item.title}
            </div>
            <div>
                <img className={styles.itemImg} src={item.image} alt={item.title}/>
            </div>
            <div className={styles.info}>
                <div className={styles.price}>Price: <b>{item.price} $</b></div>
                {/*"rating":{"rate"*/}
                {/*<div className={styles.rating}>Rating: {rate} (voted: {item.rating.count})</div>*/}

            </div>

            <div className={styles.description}>
                {item.description}
            </div>

        </div>
    )
}

export {OneProductPage}