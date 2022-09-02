import React, {useEffect, useState} from 'react';
// import {ProductService} from "../../../services/Product-service";
import {Product} from "../Product";
import styles from "./Products.module.css";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByGender} from "../../../redux/action-creators/products";

const Products = ({genre}) => {

    // const productService = new ProductService();
    // const [products, setProducts] = useState([]);


    const {products} = useSelector( ({ products: {products} }) => ({ products }) );
    const dispatch = useDispatch();



    // const getProducts = async () =>{
    //     const response = await productService.getProducts();
    //     const filtered = await response.filter(el => el.category === genre);
    //     setProducts(filtered);
    // }

    const getProducts2 = async (gender) =>{
        // const response = await productService.getProducts();
        // const filtered = await response.filter(el => el.category === genre);
        // setProducts(filtered);
        dispatch(getProductsByGender(gender))
    }


    useEffect(() => {
        // getProducts();
        getProducts2(genre);
    }, [])


    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');


    const sortByPrice = () => {
        if( price === '' || price === false ) {
            const sort = products.sort(function(a, b) { return a.price - b.price });
            setProducts(sort);
            setPrice(true);
        }else if(price === true) {
            const sort = products.sort(function(a, b) { return b.price - a.price });
            setProducts(sort);
            setPrice(false)
        }
    }


    const sortByRating = () => {
        if( rating === '' || rating === false ) {
            const sort = products.sort(function(a, b) { return a.rating.rate - b.rating.rate });
            setProducts(sort);
            setRating(true);
        }else if(rating === true) {
            const sort = products.sort(function(a, b) { return b.rating.rate - a.rating.rate });
            setProducts(sort);
            setRating(false);
        }
    }

    const [searchParams, setSearchParams] = useSearchParams();






    return (
        <div className={styles.mainDivka}>

            <div className={styles.buttonsDiv}>


                <button
                    className={styles.buttons}
                    onClick={sortByPrice}
                >
                    {price === '' || price === false ? 'Sort by lower price' : 'Sort by higher price'}
                </button>

                <button
                    className={styles.buttons}
                    onClick={sortByRating}
                >
                    {rating === '' || rating === false ? 'Sort by lower rating' : 'Sort by higher rating'}
                </button>



                <input
                    className={styles.inputs}
                    //value={searchParams.get('filter') || ''}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if(filter){
                            setSearchParams( {filter} );
                        }else {
                            setSearchParams( {} );
                        }
                    }}
                />


            </div>



            <div className={styles.list}>
                {
                    products
                        .filter((post) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let title = post.title.toLowerCase();
                            return title.includes(filter.toLowerCase());
                        })
                        .map(el => {
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