import * as ACTIONS from "./action";

export const fetchUsername = () => {
    return (dispatch) => {
        dispatch(ACTIONS.getUsername('Sanish'));
    };
};
