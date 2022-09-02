import {GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCTS_BY_GENDER} from "../action-types";
import {ProductService} from "../../services/Product-service";



// by async functions
export const getProducts = () => async (dispatch) => {
    // type: GET_PRODUCTS,
    // payload: productService.getProducts()

    const productService = new ProductService();

    const response = await productService.getProducts();
    dispatch({type: GET_PRODUCTS, payload: response});
}


export const getProductsByGender = (gender) => async (dispatch) => {
    // type: GET_PRODUCTS,
    // payload: productService.getProducts()

    const productService = new ProductService();

    const response = await productService.getProductsByGender(gender);
    dispatch({type: GET_PRODUCTS_BY_GENDER, payload: response});
}


export const getProductById = (id) => async (dispatch) => {
    // type: GET_PRODUCT_BY_ID,
    // payload: productService.getProductById(id)

    const productService = new ProductService();

    const response = await productService.getProductById(id);
    dispatch({type: GET_PRODUCT_BY_ID, payload: response});
}
