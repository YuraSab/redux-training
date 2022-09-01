import React from 'react';
import styles from "../../components/Products/Products/Products.module.css";
import {Product} from "../../components/Products/Product";
import {useSelector} from "react-redux";

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

            <div className={styles.mainDivka}>
                <div className={styles.list}>
                    {
                        wishList
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
        </div>
    )
}

export {WishListPage}