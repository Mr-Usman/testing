/**
 *
 * MyProfile
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MyProfile() {
  useInjectReducer({ key: 'myProfile', reducer });
  useInjectSaga({ key: 'myProfile', saga });

  return (
    <section className="content">
  <div className="content-upper">
    <aside className="content-upper-menu active">
      {/* SIDENAV START */}
      <nav className="sidenav">
        <div className="header">
          <i className="fas fa-user-cog" />
          <div className="label">My Account</div>
        </div>
        <ul>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-user-circle" />Profile Photo</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-address-card" />Personal Info</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-envelope" />Email</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-key" />Password</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-user" />Username</a>
          </li>
        </ul>
      </nav>
      {/* SIDENAV END */}
    </aside>
    {/* <main class="content-upper-main"></main> */}
  </div>
</section>

  );
}

MyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myProfile: makeSelectMyProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyProfile);
