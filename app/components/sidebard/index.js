/**
 *
 * Header
 *
 */

 import React, { memo } from 'react';
 //import PropTypes from 'prop-types';
 // import styled from 'styled-components';
 import { Link } from 'react-router-dom';
 
 function SideBar() {
     return (
         <>
             <nav className="sidenav">
        <div className="header">
          <div className="label">Account</div>
        </div>
        <ul>
          <li className="selected">
            <Link to="/accounts/info">Personal Info</Link>
          </li>
          <li className="demo-btn">
            <Link to="/accounts/email">Email</Link>
          </li>
          <li className="demo-btn">
            <Link to="/accounts/password">Password</Link>
          </li>
          <li className="demo-btn">
            <Link to="/accounts/photo">Profile Photo</Link>
          </li>
          <li className="demo-btn">
            <Link to="/accounts/username">Username</Link>
          </li>
          <li className="demo-btn">
            <Link to="/accounts/setting">Settings</Link>
          </li>
        </ul>
      </nav>
         </>
     )
 }
 
 SideBar.propTypes = {};
 
 export default memo(SideBar);
 