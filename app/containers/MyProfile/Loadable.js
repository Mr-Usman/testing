/**
 *
 * Asynchronously loads the component for MyProfile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
