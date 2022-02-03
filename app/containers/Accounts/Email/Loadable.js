/**
 *
 * Asynchronously loads the component for Email
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
