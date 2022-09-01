import React from 'react';
import {useSelector} from "react-redux";
import {CartElement} from "./CartElement";
import styles from "./Cart.module.css";

const CartPage = () => {

    let {cart} = useSelector(({cart: {cart}}) => ({cart}));

    // const [cartsSum, setCartsSum] = useState('');

    // const cartSum = cart.length > 0 ? (cart.reduce(function (accumulator, currentValue) {
    //     const prev = accumulator.price;
    //     const next = currentValue.price;
    //     return prev + next
    // })) : (
    //     0
    // );


    let initialValue = 0;
    let cartSum = cart.reduce(function (accumulator, currentValue) {
        // const prev = accumulator.price;
        // const next = currentValue.price;
        // return prev + next
        return accumulator + currentValue.price
    }, initialValue);


// useEffect(() => {
//     setCartsSum(cartSum);
// }, [cart.length]);

//
// const cartReduce = () => {
//     const cartSum = cart.length > 0 ? (cart.reduce(function(accumulator, currentValue){
//         const prev = accumulator.price;
//         const next = currentValue.price;
//         return prev + next
//     }) ) : (
//         0
//     );
// }


    return (
        <div className={styles.mainDiv}>


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 50,
                fontWeight: 'bold',
                color: 'black',
                fontStyle: 'oblique',
                paddingBottom: 75
            }}>
                Your cart
            </div>

            {
                cart.length > 0 ? (

                    <div>
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
                                {
                                    cart.length > 0 ? (
                                        <div>
                                            {Math.round(cartSum)} $
                                        </div>

                                    ) : (
                                        <div>
                                            0 $
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className={styles.nonSelected}>
                        <h1>No items selected</h1>
                    </div>
                )
            }
        </div>
    )
}

export {CartPage}