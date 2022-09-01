import React, {useEffect, useState} from 'react';
import styles from "./OneProductPage.module.css";
import {useParams} from "react-router-dom";
import {ProductService} from "../../services/Product-service";
import {useDispatch, useSelector} from "react-redux";
import {onAddToCart} from "../../redux/action-creators/cart";
import {onAddToWishList} from "../../redux/action-creators/wishList";
import CartIcon from "../../photos/cart.png";
import LikeActive from "../../photos/activeLike.png";
import LikeNotActive from "../../photos/noActiveLike.png";


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


    const {cart, wishList} = useSelector( ({ cart: {cart}, wishList: {wishList} }) => ({ cart, wishList }) );

    const dispatch = useDispatch();

    const addToCart = () => dispatch(onAddToCart(item));
    const addToWishList = () => dispatch(onAddToWishList(item));


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


                <div className={styles.divByIcons}>

                    <div onClick={addToCart}>
                        {
                            cart.find(el => el.id === item.id) ? (
                                <img className={styles.cartIconActive} src={CartIcon} alt={'Cart'}/>
                            ) : (
                                <img className={styles.cartIcon} src={CartIcon} alt={'Cart'}/>

                            )
                        }
                    </div>


                    <div onClick={addToWishList}>
                        {
                            wishList.find(el => el.id === item.id) ? (
                                <img className={styles.cartIcon} src={LikeActive} alt={'Like'}/>
                            ):(
                                <img className={styles.cartIcon} src={LikeNotActive} alt={'Like'}/>
                            )
                        }
                    </div>
                </div>


            </div>

            <div className={styles.description}>
                {item.description}
            </div>


        </div>
    )
}

export {OneProductPage}