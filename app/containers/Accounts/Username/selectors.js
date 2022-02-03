import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the username state domain
 */

const selectUsernameDomain = (state) => state.username || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Username
 */

const makeSelectUsername = () =>
   createSelector(
      selectUsernameDomain,
      (substate) => substate
   );

export default makeSelectUsername;
export { selectUsernameDomain };
