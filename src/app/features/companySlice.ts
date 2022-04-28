import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CompanyDetailType } from "./types/CompanyDetailType";

const initialState: CompanyDetailType = {
  loading: true,
  error: false,
  name: '',
  sales: [],
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    companyLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    companyError: (state) => {
      state.loading = false;
      state.error = true;
    },
    companyName: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.name = action.payload;
    },
    companyDetail: (state, action) => {
      state.loading = false;
      state.sales = action.payload;
    }
  }
})

export const { companyName,
  companyLoading,
  companyError,
  companyDetail,
} = companySlice.actions;

export const selectCompanyName = (state: RootState) => state.company.name;
export const selectCompanySales = (state: RootState) => state.company.sales;
export const selectCompanyLoading = (state: RootState) => state.company.loading;
export const selectCompanyError = (state: RootState) => state.company.error;

export default companySlice.reducer;