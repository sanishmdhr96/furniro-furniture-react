import * as ACTION_TYPE from "./types"


export const fetchProductsRequest = () => {
    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST,
    }
}

export const fetchProductsRequestSuccess = (data) => {
    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST_SUCCESS,
        data
    }
}

export const fetchProductsRequestFailure = (error) => {
    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST_ERROR,
        error
    }
}