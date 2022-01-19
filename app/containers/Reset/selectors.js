import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reset state domain
 */

const selectResetDomain = state => state.reset || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Reset
 */

const makeSelectReset = () =>
  createSelector(
    selectResetDomain,
    substate => substate,
  );

export default makeSelectReset;
export { selectResetDomain };
