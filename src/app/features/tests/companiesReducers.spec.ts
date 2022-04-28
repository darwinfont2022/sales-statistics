import reducer, {
  companiesLoading,
  companiesError,
  companiesData
} from '../companiesSlice'

import { companies, initialCompaniesState } from './mocks'

describe('Companies Reducers', () => {
  it('should be return initialCompaniesState', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialCompaniesState)
  });
  it('should be return loadin true', () => {
    expect(reducer(initialCompaniesState, companiesLoading())).toBeTruthy();
  });
  it('should be return error true', () => {
    expect(reducer(initialCompaniesState, companiesError())).toBeTruthy();
  });
  it('should be return array companies', () => {
    const currentState = reducer(initialCompaniesState, companiesData({ monthResult: 'Enero', companies: companies }));
    expect(currentState.companies).toContainObject({ id: '1' });
  });
});