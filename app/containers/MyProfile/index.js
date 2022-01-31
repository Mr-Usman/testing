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
import { useApi } from '../../components/customHooks/useApi';

export function MyProfile() {
  useInjectReducer({ key: 'myProfile', reducer });
  useInjectSaga({ key: 'myProfile', saga });
  const user = JSON.parse(localStorage.getItem('user'));
  const getAllApiUrl = `/users/user/${user._id}`;
  const [data] = useApi(getAllApiUrl, false, { method: 'GET' });
  const { responseData } = data || {};
  console.log('user', data);
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
            <a href="#"><i className="fas fa-envelope" />Email : {responseData && responseData.user && responseData.user.email}</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-key" />Password</a>
          </li>
          <li className="demo-btn">
            <a href="#"><i className="fas fa-user" />Username: {responseData && responseData.user && responseData.user.firstName }</a>
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
