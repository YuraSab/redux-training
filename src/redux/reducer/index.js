import cart from "./Cart";
import wishList from "./WishList";
import products from "./Pdoducts";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    cart: cart,
    wishList: wishList,
    products: products,
    chosenProduct: products
})