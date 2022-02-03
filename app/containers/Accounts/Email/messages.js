/*
 * Email Messages
 *
 * This contains all the text for the Email container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Email";

export default defineMessages({
   header: {
      id: `${scope}.header`,
      defaultMessage: "This is the Email container!",
   },
});
