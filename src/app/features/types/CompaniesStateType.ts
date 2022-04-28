import { CompanyType } from "../../../types/CompanyType";

export interface CompaniesStateType {
  loading: boolean;
  error: boolean;
  companies: CompanyType[];
  bestCompany: {
    companyName: string;
    bestMonth: string;
    total: number;
  };
}