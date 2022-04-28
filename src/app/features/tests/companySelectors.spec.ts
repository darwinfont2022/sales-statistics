import {
  selectCompanyError,
  selectCompanyLoading,
  selectCompanyName,
  selectCompanySales
} from "../companySlice";
import { state } from "./mocks";

describe('Selectors company', () => {
  it('Loading selector', () => {
    expect(selectCompanyLoading(state)).toBeTruthy()
  });
  it('Error selector', () => {
    expect(selectCompanyError(state)).toBeFalsy()
  });
  it('Name selector', () => {
    expect(selectCompanyName(state)).toEqual('')
  });
  it('Name selector', () => {
    expect(selectCompanySales(state)).toEqual([])
  });
});