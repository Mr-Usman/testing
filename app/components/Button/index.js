/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Button.propTypes = {};

export default memo(Button);
