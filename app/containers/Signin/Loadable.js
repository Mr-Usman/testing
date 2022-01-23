/**
 *
 * Asynchronously loads the component for Signin
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
