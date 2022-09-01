import {ON_ADD_TO_WISHLIST} from "../action-types";


const initialState = {
    wishList: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ON_ADD_TO_WISHLIST: {
            //  gets object in parameters (id)
            // if this has been changed - element was there
            // if this has not been changed - element was not there
            const isAdded = state.wishList.filter(el => el.id !== action.payload.id);

            // we adding element to massive
            if (state.wishList.length === isAdded.length) {
                isAdded.push(action.payload);
            }

            // if element was in wishList - we delete him, if not - we add him.
            return {
                ...state,
                wishList: isAdded
            }
        }

        default: {
            return state
        }
    }
}


