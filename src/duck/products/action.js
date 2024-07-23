import * as ACTION_TYPE from "./types"


export const fetchProductsRequest = () => {
    console.log('products request')
    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST,
    }
}

export const fetchProductsRequestSuccess = (data) => {
    console.log('products success', data)

    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST_SUCCESS,
        data
    }
}

export const fetchProductsRequestFailure = (error) => {
    console.log('products error', error)

    return {
        type: ACTION_TYPE.FETCH_PRODUCTS_REQUEST_ERROR,
        error
    }
}