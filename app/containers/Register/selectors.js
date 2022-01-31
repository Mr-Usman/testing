import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUp state domain
 */

const selectRegisterDomain = state => state.signUp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Register
 */

const makeSelectRegister = () =>
  createSelector(
    selectRegisterDomain,
    substate => substate,
  );

export default makeSelectRegister;
export { selectRegisterDomain };
