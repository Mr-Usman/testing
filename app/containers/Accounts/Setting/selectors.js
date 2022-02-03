import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the setting state domain
 */

const selectSettingDomain = (state) => state.setting || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Setting
 */

const makeSelectSetting = () =>
   createSelector(
      selectSettingDomain,
      (substate) => substate
   );

export default makeSelectSetting;
export { selectSettingDomain };
