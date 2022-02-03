import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the info state domain
 */

const selectInfoDomain = (state) => state.info || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Info
 */

const makeSelectInfo = () =>
   createSelector(
      selectInfoDomain,
      (substate) => substate
   );

export default makeSelectInfo;
export { selectInfoDomain };
