/*
 * Photo Messages
 *
 * This contains all the text for the Photo container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Photo";

export default defineMessages({
   header: {
      id: `${scope}.header`,
      defaultMessage: "This is the Photo container!",
   },
});
