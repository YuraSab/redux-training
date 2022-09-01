import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import Logo from "../../photos/Habibi.jpg";
// import {useSelector} from "react-redux";
import HeaderCart from "../../photos/headerCart.png";
import LikeActive from "../../photos/activeLike.png";


const Header = () => {


    // const {cart, wishList} = useSelector(({cart: {cart}, wishList: {wishList}}) => ({cart, wishList}));


    return (
        <div className={styles.mainDiv}>


            <Link className={styles.link} to={'/'}>
                <div className={styles.divLink}>
                    Home
                </div>
            </Link>

            <Link className={styles.link} to={'/products'}>
                <div className={styles.divLink}>
                    Products
                </div>
            </Link>

            <Link className={styles.link} to={'/info'}>
                <div className={styles.divLink}>
                    Info
                </div>
            </Link>


            <div style={{justifyContent: "end"}}>
                <img src={Logo} style={{width: 250, paddingLeft: 675}} alt={'Logo'}/>
            </div>


            <div className={styles.byIcons}>
                <Link to={`/products/cart`}>
                    <img className={styles.cartIcon} src={HeaderCart} alt={'Like'}/>
                    {/*<h5>{cart.length}</h5>*/}

                </Link>

                <Link to={`/products/wish_list`}>
                    <img className={styles.likeIcon} src={LikeActive} alt={'Like'}/>
                    {/*<h5>{wishList.length}</h5>*/}
                </Link>

            </div>

        </div>
    )
}

export {Header}