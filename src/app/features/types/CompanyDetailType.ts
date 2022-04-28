import { SaleType } from "../../../types/SaleType";

export interface CompanyDetailType {
  loading: boolean,
  error: boolean,
  sales: SaleType[],
  name: string,
}