import React, {useEffect} from 'react';
import styles from "./OneProductPage.module.css";
import {useParams} from "react-router-dom";
// import {ProductService} from "../../services/Product-service";
import {useDispatch, useSelector} from "react-redux";
import {onAddToCart} from "../../redux/action-creators";
import {onAddToWishList} from "../../redux/action-creators";
import CartIcon from "../../photos/cart.png";
import LikeActive from "../../photos/activeLike.png";
import LikeNotActive from "../../photos/noActiveLike.png";
import {getProductById} from "../../redux/action-creators";


const OneProductPage = () => {

    const {id} = useParams();

    // const [item, setItem] = useState('');

    // const productService = new ProductService();


    const {cart, wishList, chosenProduct} = useSelector( ({ cart: {cart}, wishList: {wishList}, chosenProduct: {chosenProduct} }) => ({ cart, wishList, chosenProduct }) );
    const dispatch = useDispatch();


    // const getOneProduct =  async () => {
    //     const product = await productService.getProductById(id);
    //     setItem(product);
    // }

    const getOneProduct2 = (id) => {
        dispatch(getProductById(id))
    }


    useEffect(() => {
        // getOneProduct();

        getOneProduct2(id);
    }, [id]);


    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}
    // price




    const addToCart = () => dispatch(onAddToCart(chosenProduct));
    const addToWishList = () => dispatch(onAddToWishList(chosenProduct));


    return (

        <div className={styles.mainDiv}>
            <div className={styles.title}>
                {chosenProduct.title}
            </div>



            <div>
                <img className={styles.itemImg} src={chosenProduct.image} alt={chosenProduct.title}/>
            </div>
            <div className={styles.info}>
                <div className={styles.price}>Price: <b>{chosenProduct.price} $</b></div>
                {/*"rating":{"rate"*/}
                {/*<div className={styles.rating}>Rating: {rate} (voted: {chosenProduct.rating.count})</div>*/}


                <div className={styles.divByIcons}>

                    <div onClick={addToCart}>
                        {
                            cart.find(el => el.id === chosenProduct.id) ? (
                                <img className={styles.cartIconActive} src={CartIcon} alt={'Cart'}/>
                            ) : (
                                <img className={styles.cartIcon} src={CartIcon} alt={'Cart'}/>

                            )
                        }
                    </div>


                    <div onClick={addToWishList}>
                        {
                            wishList.find(el => el.id === chosenProduct.id) ? (
                                <img className={styles.cartIcon} src={LikeActive} alt={'Like'}/>
                            ):(
                                <img className={styles.cartIcon} src={LikeNotActive} alt={'Like'}/>
                            )
                        }
                    </div>
                </div>


            </div>

            <div className={styles.description}>
                {chosenProduct.description}
            </div>


        </div>
    )
}

export {OneProductPage}