import {ON_ADD_TO_CART} from "../action-types";

export const onAddToCart = (product) => ({
    type: ON_ADD_TO_CART,
    payload: product
})
