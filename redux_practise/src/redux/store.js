import { configureStore } from "@reduxjs/toolkit";

import testslice from "../redux/slice/testSlice";

export const store=configureStore({
    reducer:{
        test:testslice,
    }
})
export default store;