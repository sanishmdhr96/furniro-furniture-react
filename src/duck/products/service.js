import * as ACTIONS from "./action";

export const fetchProductList = (params) => {
    console.log('function dispatch', params)
    return (dispatch) => {
        dispatch(ACTIONS.fetchProductsRequest());

        fetch(`${import.meta.env.VITE_BASE_API}/products?limit=${params?.limit}`)
            .then((data) => data.json())
            .then((response) => {
                dispatch(ACTIONS.fetchProductsRequestSuccess(response));
            })
            .catch((error) => dispatch(ACTIONS.fetchProductsRequestFailure(error)));
    };
};
