import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the updatePassword state domain
 */

const selectUpdatePasswordDomain = state =>
  state.updatePassword || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UpdatePassword
 */

const makeSelectUpdatePassword = () =>
  createSelector(
    selectUpdatePasswordDomain,
    substate => substate,
  );

export default makeSelectUpdatePassword;
export { selectUpdatePasswordDomain };
