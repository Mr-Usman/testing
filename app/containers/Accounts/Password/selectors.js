import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the password state domain
 */

const selectPasswordDomain = (state) => state.password || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Password
 */

const makeSelectPassword = () =>
   createSelector(
      selectPasswordDomain,
      (substate) => substate
   );

export default makeSelectPassword;
export { selectPasswordDomain };
