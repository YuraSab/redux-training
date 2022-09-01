import React from 'react';
import {useSelector} from "react-redux";
import {CartElement} from "./CartElement";
import styles from "./Cart.module.css";

const CartPage = () => {

    const {cart} = useSelector(({cart: {cart}}) => ({cart}));



        const cartSum = cart.length > 0 ? (cart.reduce(function(accumulator, currentValue){
            const prev = accumulator.price;
            const next = currentValue.price;
            return prev + next
        }) ) : (
            0
        );


    return (
        <div className={styles.mainDiv}>



            <div className={styles.tableEl}>
                <div className={styles.tableImg}>
                    Image
                </div>

                <div className={styles.tableTitle}>
                    Title
                </div>

                <div className={styles.tablePrice}>
                    Price
                </div>
            </div>


            <div className={styles.tableCart}>
                {
                    cart.length > 0 ? (

                        cart.map(el => {
                            return (
                                <CartElement
                                    key={el.id}
                                    item={el}
                                />
                            )
                        })
                    ) : (
                        <div>
                            No selected
                        </div>
                    )
                }
            </div>

            <div className={styles.totalDiv}>
                <div className={styles.totalCaption}>
                    Total price
                </div>

                <div className={styles.totalPrice}>
                    {cartSum} $
                </div>
            </div>


        </div>
    )
}

export {CartPage}