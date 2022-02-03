/**
 *
 * Setting
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
import CustomFeild from "../../../components/Form/CustomField";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectSetting from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Sidebar from "../../../components/sidebard";

export function Setting() {
  useInjectReducer({ key: "setting", reducer });
  useInjectSaga({ key: "setting", saga });

  const formFields = [
    {
      type: "switch",

    },


  ];

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
                  <div className="panel-label">Settings</div>
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
                {/* <div class="section-label">Moderation</div> */}
                <div className="form">
                  <div className="form-group-noselect">
                    <label className="group-label">Community Moderation</label>
                    <div className="form-output-body">
                      I would like to be invited to participate in community moderation. I understand that I
                      may be subjected to offensive content. Read more about<a className="btn btn-link" href="docs_moderation.html"><i className="icon fas fa-file-alt" />Moderation</a>.
                    </div>
                    {formFields.map((field, index) => {
                      const key = `formField${index}`;
                      return (
                        <CustomFeild
                          key={key}
                          feild={field}
                        // errors={errors}
                        // touched={touched}
                        // onChange={handleChange}
                        // setFieldValue={(selected, key = '') => {
                        //   let value;
                        //   if (key === 'channelId' || key === 'roleId') {
                        //     value = selected;
                        //   } else {
                        //     value =
                        //       selected.length > 0 ? selected[0].id : '';

                        //   }
                        //   setFieldValue(field.name, value, true);
                        // }}
                        // setFieldTouched={() =>
                        //   setFieldTouched(field.name, true)
                        // }
                        />
                      );
                    })}
                  </div>
                </div>
                {/* <div class="btn-link-group balance-text">
                     Read about
                     <a class="btn btn-link" href="docs_moderation.html"
                        ><i class="icon fas fa-file-alt"></i>Moderation</a
                     >
                  </div> */}
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

Setting.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setting: makeSelectSetting(),
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
)(Setting);
