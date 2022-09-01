import React from 'react';
import styles from "../../components/Products/Products/Products.module.css";
import {useSelector} from "react-redux";
import {WishListElement} from "./WishListElement";

const WishListPage = () => {

    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));


    return (


        <div style={{paddingTop: 50}}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 50,
                fontWeight: 'bold',
                color: 'black',
                fontStyle: 'oblique',
            }}>
                You liked
            </div>

            {
                wishList.length > 0 ? (

                    <div>


                        <div className={styles.mainDivka}>
                            <div className={styles.list}>
                                {
                                    wishList
                                        .map(el => {
                                            return (
                                                <WishListElement
                                                    key={el.id}
                                                    item={el}
                                                />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.nonSelected}>
                        <div style={{paddingTop: 75}}><h1>No items selected</h1></div>
                    </div>
                )
            }

        </div>
    )
}

export {WishListPage}