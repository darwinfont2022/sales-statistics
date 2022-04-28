import reducer, {
  companyName,
  companyLoading,
  companyError,
  companyDetail,
} from '../companySlice';
import { CompanyDetailType } from '../types/CompanyDetailType';
import { initialCompanyState, sales } from './mocks';

describe('Company reducers', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialCompanyState)
  });

  it('should return loading', () => {
    const currentState = reducer(initialCompanyState, companyLoading())
    expect(currentState.loading).toBeTruthy();
  });

  it('should be return error true, loading false', () => {
    const currentState: CompanyDetailType = {
      name: '',
      error: true,
      loading: false,
      sales: [],
    }

    expect(reducer(initialCompanyState, companyError())).toEqual(currentState);
  });

  it('should be return name Pedro Lamar', () => {
    const currentState: CompanyDetailType = {
      name: 'Pedro Lamar',
      error: false,
      loading: false,
      sales: [],
    }
    expect(reducer(initialCompanyState, companyName('Pedro Lamar'))).toEqual(currentState);
  });

  it('should be return array sales', () => {
    const currentState = reducer(initialCompanyState, companyDetail(sales));
    expect(currentState.sales).toContainObject(
      {
        id: '1q2w3e4r5t6y',
        nameAgency: 'Fuego nativo',
      }
    );
  });
});


