import { state } from './mocks'

import {
  selectCompamies,
  selectBestCompany,
  selectCompamiesLoading,
  selectCompamiesError,
} from '../companiesSlice'

describe('Selectotos Companies', () => {
  it('Selector loading false', () => {
    expect(selectCompamiesLoading(state)).toBeFalsy()
  });
  it('Selector error false', () => {
    expect(selectCompamiesError(state)).toBeFalsy()
  });
  it('Selector bestCompany false', () => {
    expect(selectBestCompany(state)).toEqual(
      expect.objectContaining(
        {
          bestMonth: expect.any(String),
          companyName: expect.any(String),
          total: expect.any(Number),
        }
      )
    )
  });
  it('Selector companies false', () => {
    expect(selectCompamies(state)).toEqual(
      expect.arrayContaining([])
    )
  });
})