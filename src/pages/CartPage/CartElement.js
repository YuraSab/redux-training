import React from 'react';
import styles from "./Cart.module.css";
// import {useDispatch, useSelector} from "react-redux";
// import {onAddToCart} from "../../redux/action-creators/cart";
// import CartIcon from "../../photos/cart.png";

const CartElement = ({item}) => {

    // id
    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}


    // const {cart} = useSelector(({cart: {cart}}) => ({cart}));
    //
    // const dispatch = useDispatch();
    // const addToCart = () => dispatch(onAddToCart(item));


    return (
        <div className={styles.mainEl}>
            <div className={styles.cartImg}>
                <img className={styles.itemImg} src={item.image} alt={item.title}/>
            </div>
            <div className={styles.cartTitle}>
                {item.title}
            </div>
            <div className={styles.cartPrice}>
                {item.price} $
            </div>


            <div className={styles.cartCart}>
                {/*<div onClick={addToCart}>*/}
                {/*    {*/}
                {/*        cart.find(el => el.id === item.id) ? (*/}
                {/*            <img className={styles.cartIconActive} src={CartIcon} alt={'Cart'}/>*/}
                {/*        ) : (*/}
                {/*            <img className={styles.cartIcon} src={CartIcon} alt={'Cart'}/>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export {CartElement}