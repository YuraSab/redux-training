import {GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCTS_BY_GENDER} from "../action-types";

const initialState = {
    products: [],
    chosenProduct: ''
}


export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS: {

            return {
                ...state,
                products: action.payload
            }
        }

        case GET_PRODUCTS_BY_GENDER: {

            return {
                ...state,
                products: action.payload
            }
        }

        case GET_PRODUCT_BY_ID: {

            return {
                ...state,
                chosenProduct: action.payload
            }
        }


        default: {
            return state
        }
    }
}
