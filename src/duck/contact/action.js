import * as ACTION_TYPE from "./types"


export const addContactRequest = () => {
    return {
        type: ACTION_TYPE.ADD_CONTACT_REQUEST,
    }
}

export const addContactRequestSuccess = (data) => {
    return {
        type: ACTION_TYPE.ADD_CONTACT_REQUEST_SUCCESS,
        data
    }
}

export const addContactRequestFailure = (error) => {
    return {
        type: ACTION_TYPE.ADD_CONTACT_REQUEST_ERROR,
        error
    }
}