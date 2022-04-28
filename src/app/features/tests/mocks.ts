import { CompanyType } from "../../../types/CompanyType"
import { SaleType } from "../../../types/SaleType"
import { RootState } from "../../store"
import { CompaniesStateType } from "../types/CompaniesStateType"
import { CompanyDetailType } from "../types/CompanyDetailType"

export const initialCompanyState: CompanyDetailType = {
  error: false,
  loading: true,
  name: '',
  sales: []
}

export const initialCompaniesState: CompaniesStateType = {
  loading: false,
  error: false,
  bestCompany: {
    bestMonth: '',
    companyName: '',
    total: 0,
  },
  companies: []
}
export const companies: CompanyType[] = [
  {
    commission: 1,
    id: '1',
    nameCompany: 'QWET',
    total: 1,
    totalSales: 1,
  },
  {
    commission: 2,
    id: '2',
    nameCompany: 'ABCD',
    total: 2,
    totalSales: 2,
  },
]
export const sales: SaleType[] = [
  {
    id: '1q2w3e4r5t6y',
    nameAgency: 'Fuego nativo',
    day: '12-4-2022',
    name: 'Pedro Lamar',
    paymentStatus: 'ok',
    finalPrice: '1200',
    datePayment: '12-4-2022 12:00',
    createdAt: '',
    persons: '1',
    hour: '12:00',
    timeZone: '12-4-2022 12:00',
  },
  {
    id: '123465789',
    nameAgency: 'Fuego nativo',
    day: '12-4-2022',
    name: 'Oscar',
    paymentStatus: 'ok',
    finalPrice: '1500',
    datePayment: '12-3-2022 12:00',
    createdAt: '',
    persons: '1',
    hour: '12:00',
    timeZone: '12-3-2022 12:00',
  },
]

export const state: RootState = {
  companies: initialCompaniesState,
  company: initialCompanyState
}