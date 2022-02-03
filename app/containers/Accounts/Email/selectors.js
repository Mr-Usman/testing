import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the email state domain
 */

const selectEmailDomain = (state) => state.email || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Email
 */

const makeSelectEmail = () =>
   createSelector(
      selectEmailDomain,
      (substate) => substate
   );

export default makeSelectEmail;
export { selectEmailDomain };
