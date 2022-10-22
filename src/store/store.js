import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from './slice/conversationSlice';

const store = configureStore({
    reducer: {
        conversation: conversationReducer
    },

});

export default store;