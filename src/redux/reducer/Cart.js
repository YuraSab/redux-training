import {ON_ADD_TO_CART} from "../action-types";

const initialState = {
    cart: []
};

export default (state = initialState, action) => {
    switch (action.type){

        case ON_ADD_TO_CART: {

            const isAdded = state.cart.filter( el => el.id !== action.payload.id );

            if (state.cart.length === isAdded.length ) {
                isAdded.push(action.payload);
            }

            return {
                ...state,
                cart: isAdded
            };
        }

        default: {
            return state;
        }
    }
}


