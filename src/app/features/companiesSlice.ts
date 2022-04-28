import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { CompaniesStateType } from "./types/CompaniesStateType";

const initialState: CompaniesStateType = {
  loading: false,
  error: false,
  companies: [],
  bestCompany: {
    bestMonth: "",
    companyName: "",
    total: 0,
  },
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    companiesLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    companiesError: (state) => {
      state.error = true;
      state.loading = false;
    },
    companiesData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.companies = action.payload.companies;
      state.bestCompany.companyName = action.payload.companies[0].nameCompany;
      state.bestCompany.total = action.payload.companies[0].total;
      state.bestCompany.bestMonth = action.payload.monthResult
        ? action.payload.monthResult
        : "ENERO";
    },
  },
});

export const { companiesLoading, companiesError, companiesData } =
  companiesSlice.actions;

export const selectCompamies = (state: RootState) => {
  return state.companies.companies;
}
export const selectBestCompany = (state: RootState) => {
  return state.companies.bestCompany;
}
export const selectCompamiesLoading = (state: RootState) => {
  return state.companies.loading;
}
export const selectCompamiesError = (state: RootState) => {
  return state.companies.error;
}

export default companiesSlice.reducer;
