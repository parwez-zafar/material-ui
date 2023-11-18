import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

export const demoReucer = createReducer(initialState, {
    LOAD_DATA_REQUEST: (state) => {
        return {
            loading: true,
            ...state
        }
    },
    LOAD_DATA_SUCCESS: (state, action) => {
        return {
            loading: false,
            data: action.payload
        }
    },
    LOAD_DATA_FAIL: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    },
    CLEAR_ERRORS: (state, action) => {
        return {
            ...state,
            error: null
        }
    }
})