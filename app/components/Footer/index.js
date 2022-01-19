/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
//import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
    return (
        <>
            <footer className="footer debug">
                <p>.footer</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Nihil opus est
                    exemplis hoc facere longius.
                </p>
            </footer>
        </>
    )
}

Footer.propTypes = {};

export default memo(Footer);
