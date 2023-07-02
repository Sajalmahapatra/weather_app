import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";
import weatherReducer from "./reducers/weatherReducer";

// Here we create a global store.
const store = configureStore({
    reducer:{
        app: appReducer,
        weather: weatherReducer,
    }
});
export default store;