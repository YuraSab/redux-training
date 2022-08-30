import React, {useEffect, useState} from 'react';
import {ProductService} from "../../../services/Product-service";
import {Product} from "../Product";
import styles from "./Products.module.css";

const Products = ({genre}) => {


    const productService = new ProductService();

    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        const response = await productService.getProducts();
        const filtered = await response.filter(el => el.category === genre);
        setProducts(filtered);
    }

    useEffect(() => {
        getProducts();
    }, [])



    return (
        <div className={styles.mainDiv}>
            <div>
                {
                    products.map(el => {
                        return (
                            <Product
                                key={el.id}
                                item={el}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export {Products}