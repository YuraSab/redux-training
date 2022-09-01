import {ON_ADD_TO_WISHLIST} from "../action-types";

export const onAddToWishList = (product) => ({
    type: ON_ADD_TO_WISHLIST,
    payload: product
});