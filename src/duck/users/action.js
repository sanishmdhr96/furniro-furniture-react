import * as ACTION_TYPE from './types'

export const getUsername = (data) => {
    return {
        type: ACTION_TYPE.GET_USER_NAME,
        data
    }
}
