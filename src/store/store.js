import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";

// Here we create a global store.
const store = configureStore({
    reducer:{
        app: appReducer
    }
});
export default store;