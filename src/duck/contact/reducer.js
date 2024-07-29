
import * as ACTION_TYPE from "./types"

const INITIAL_STATE = {
    loading: false,
    payload: [],
    errors: {}
}

export const contactReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ACTION_TYPE.ADD_CONTACT_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case ACTION_TYPE.ADD_CONTACT_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {}
            })


        case ACTION_TYPE.ADD_CONTACT_REQUEST_ERROR:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error
            })


        default:
            return state
    }
}