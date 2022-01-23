import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signin state domain
 */

const selectSigninDomain = state => state.signin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Signin
 */

const makeSelectSignin = () =>
  createSelector(
    selectSigninDomain,
    substate => substate,
  );

export default makeSelectSignin;
export { selectSigninDomain };
