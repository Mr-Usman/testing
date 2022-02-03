import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the photo state domain
 */

const selectPhotoDomain = (state) => state.photo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Photo
 */

const makeSelectPhoto = () =>
   createSelector(
      selectPhotoDomain,
      (substate) => substate
   );

export default makeSelectPhoto;
export { selectPhotoDomain };
