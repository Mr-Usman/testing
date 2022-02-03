/**
 *
 * Username
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectUsername from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Sidebar from "../../../components/sidebard";

export function Username() {
  useInjectReducer({ key: "username", reducer });
  useInjectSaga({ key: "username", saga });

  const formFields = [
    {
      type: "text",
      name: "currentUsername",
      label: "Current Username",
      placeholder: "",
      icon: 'icon fas fa-shield-alt'
    },
    {
      type: "text",
      name: "newUserName",
      label: "New Username",
      placeholder: "",
      icon: 'icon fas fa-shield-alt'

    },
    {
      type: "text",
      name: "twitter",
      label: "Twitter",
      placeholder: "",
      icon: 'icon fas fa-shield-alt'


    },
  ];

  return (
    <div className="Wrapper">
      <Header isLoggedIn={true} />
      <section className="content">
        <div className="content-upper">
          <aside className="content-upper-menu">
            {/* SIDENAV START */}
            <Sidebar />
            {/* SIDENAV END */}
          </aside>
          <main className="content-upper-main">
            {/* MAIN AREA START */}
            <nav className="mobile-nav">
              <a className="btn btn-link" href="#"><i className="icon fas fa-angle-left" />Account Menu</a>
            </nav>
            <div className="panel">
              <div className="panel-header">
                <div className="panel-left">
                  <div className="panel-label">Username</div>
                  <div className="panel-triangle-tl" />
                  <div className="stripe stripe1" />
                  <div className="stripe stripe2" />
                  <div className="stripe stripe3" />
                </div>
                <div className="panel-mid" />
                <div className="panel-right">
                  <div className="panel-corner panel-corner-tr" />
                </div>
              </div>
              <div className="panel-content">
                {/* FORM START */}
                <div className="form">
                  <div className="form-group">
                    <p className="form-text balance-text">Your username is public.</p>
                  </div>
                  <div className="form-group">
                    <label className="group-label" htmlFor="current-email">Current Username<i className="icon fas fa-users" /></label>
                    <div className="input-group">
                      <div className="form-output">@user304958345</div>
                    </div>
                  </div>
                  <div className="section-label">Update Username</div>
                  <div className="form-group">
                    <p className="form-text balance-text">Enter a new username below.</p>
                  </div>
                  <div className="form-group">
                    <label className="group-label" htmlFor="new-username">New Username<i className="icon fas fa-users" /></label>
                    <div className="input-group">
                      <input id="new-username" name="new-username" type="text" className="form-input md" autoComplete="off" defaultValue="@username" />
                    </div>
                    {/* <div class="group-invalid">"Username" must contain at least 8 characters</div> */}
                  </div>
                  <div className="form-group">
                    <p className="form-text balance-text">
                      There is a non-refundable fee of<span className="text-currency">
                        <i className="icon fas fa-dice-d10" /> 60,000</span>
                      for this action. If the new username is rejected by the community, your account will
                      revert to the old username.
                    </p>
                    <div className="btn-link-group balance-text" style={{ margin: '-5px 0 10px' }}>
                      Read more about
                      <a className="btn btn-link" target="_blank" href="docs_moderation.html"><i className="icon fas fa-file-alt" />Moderation</a>
                    </div>
                    <div className="form-select">
                      <label className="form-select-label"><input className="form-check-input" type="checkbox" defaultValue="feeAgree" defaultChecked="false" />
                        <i className="icon far fa-check-square" />I agree</label>
                    </div>
                  </div>
                  <div className="btn-group">
                    <div className="btn-space" />
                    <div className="btn-hold">
                      <button type="submit" className="btn btn-primary">Update Username</button>
                    </div>
                    <div className="btn-space" />
                  </div>
                </div>
                {/* FORM END */}
              </div>
              <div className="panel-footer">
                <div className="panel-left">
                  <div className="panel-corner panel-corner-bl" />
                </div>
                <div className="panel-mid">
                  <div className="panel-footer-mid" />
                </div>
                <div className="panel-right">
                  <div className="panel-corner panel-corner-br" />
                </div>
              </div>
            </div>
            <div className="table username-history">
              <div className="head">
                <div className="left">
                  <span className="label">Username History</span>
                </div>
                <div className="center" />
                <div className="right">
                  <i className="icon fas fa-users" />
                </div>
              </div>
              <table>
                <tbody><tr>
                  <th>Date</th>
                  <th>Username</th>
                </tr>
                  <tr>
                    <td>12 May 2021</td>
                    <td>@user304958345</td>
                  </tr>
                  <tr>
                    <td>12 May 2021</td>
                    <td>@username</td>
                  </tr>
                  <tr>
                    <td>12 December 2021</td>
                    <td>@username2</td>
                  </tr>
                </tbody></table>
            </div>
            {/* MAIN AREA END */}
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Username.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Username);
