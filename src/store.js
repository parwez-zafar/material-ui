import { configureStore } from '@reduxjs/toolkit';
import { demoReucer } from './reducer/demo';

let initialState = {

}

const store = configureStore({
    reducer: {
        // you can add multiple reducers
        data: demoReucer,
        // name: demoReucer
    },
    preloadedState: initialState
})


export default store;