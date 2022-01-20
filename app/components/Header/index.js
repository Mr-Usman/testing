/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import logo from '../../images/logo.svg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <a className="logo" href="/">
            <img src={logo} alt="Logo" width={148} height={30} />
          </a>
          <div className="space" />
          <a className="menu" href="menu_language.html">
            <span className="menu-icon flag-icon flag-icon-gb" />
          </a>
          <a className="menu" href="menu_main.html">
            <i className="menu-icon fas fa-bars toggle-open" />
          </a>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {};

export default memo(Header);
