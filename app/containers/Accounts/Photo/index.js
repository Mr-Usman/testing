/**
 *
 * Photo
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
import makeSelectPhoto from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Sidebar from "../../../components/sidebard";
import messages from "./messages";

export function Photo() {
  useInjectReducer({ key: "photo", reducer });
  useInjectSaga({ key: "photo", saga });

  return (
    <div className="wrapper">
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
              <a className="btn btn-link" href="account.html"><i className="icon fas fa-angle-left" />Account Menu</a>
            </nav>
            <div className="panel">
              <div className="panel-header">
                <div className="panel-left">
                  <div className="panel-label">Profile Photo</div>
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
                    <p className="form-text balance-text">
                      Drag-and-drop or choose image to upload a new photo. Drag to reposition the photo. Use
                      the slider to adjust the size.
                    </p>
                  </div>
                  <div className="form-group-noselect">
                    <label className="group-label" htmlFor="given-name">Profile Photo<i className="icon fas fa-users" /></label>
                    <div className="photo-area">
                      <button className="btn btn-secondary-outline btn-sm m-t-20">
                        <i className="icon fas fa-upload" />Choose Image...
                      </button>
                      <div className="photo-upload" />
                      <div className="photo-slider">
                        <input type="range" min={1} max={100} defaultValue={50} />
                      </div>
                    </div>
                    {/* <div class="group-invalid">"Profile Photo" put error message here.</div> */}
                  </div>
                  <div className="form-group">
                    <p className="form-text balance-text">
                      There is a non-refundable fee of<span className="text-currency">
                        <i className="icon fas fa-dice-d10" /> 60,000</span>
                      for this action. If the new image is rejected by the community, your account will
                      revert to the old image.
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
                      <button type="submit" className="btn btn-primary">Update Photo</button>
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
            {/* MAIN AREA END */}
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Photo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  photo: makeSelectPhoto(),
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
)(Photo);
