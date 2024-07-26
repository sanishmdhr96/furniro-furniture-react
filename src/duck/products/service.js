import * as ACTIONS from "./action";

export const fetchProductList = () => {
    console.log('function dispatch')
    return (dispatch) => {
        dispatch(ACTIONS.fetchProductsRequest());

        fetch("https://fakestoreapi.com/products?limit=16")
            .then((data) => data.json())
            .then((response) => {
                dispatch(ACTIONS.fetchProductsRequestSuccess(response));
            })
            .catch((error) => dispatch(ACTIONS.fetchProductsRequestFailure(error)));
    };
};
