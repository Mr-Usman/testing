/*
 * Info Messages
 *
 * This contains all the text for the Info container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Info";

export default defineMessages({
   header: {
      id: `${scope}.header`,
      defaultMessage: "This is the Info container!",
   },
});
