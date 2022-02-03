/**
 *
 * Info
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectInfo from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import CustomFeild from "../../../components/Form/CustomField";
import Sidebar from "../../../components/sidebard";

export function Info() {
   useInjectReducer({ key: "info", reducer });
   useInjectSaga({ key: "info", saga });
   const formFields = [
      {
         type: "text",
         name: "firstName",
         label: "First Name",
         placeholder: "",
         icon: 'icon fas fa-shield-alt'
      },
      {
         type: "date",
         name: "birthDay",
         label: "Birthday",
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
                           <div className="panel-label">Personal Info</div>
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
                                 This information is used to personlize your experience.
                              </p>
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



                           <div className="btn-group">
                              <div className="btn-space" />
                              <div className="btn-hold">
                                 <button type="submit" className="btn btn-primary">Update Info</button>
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

Info.propTypes = {
   dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
   info: makeSelectInfo(),
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
)(Info);
