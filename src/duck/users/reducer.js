
import * as ACTION_TYPE from "./types"

const INITIAL_STATE = {
    username: ''
}

export const userReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ACTION_TYPE.GET_USER_NAME:
            return Object.assign({}, state, {
                username: action.data,
            })

        default:
            return state
    }
}