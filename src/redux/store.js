import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const reduxStore = (initialState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        initialState,
    })

    return store
}

export default reduxStore