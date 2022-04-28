import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./features/companySlice";
import companiesReduces from "./features/companiesSlice";

export const store = configureStore({
  reducer: {
    companies: companiesReduces,
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
