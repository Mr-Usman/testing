/**
 *
 * Register
 *
 */

import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "../../validations/index";
import makeSelectRegister from "./selectors";
import reducer from "./reducer";

import saga from "./saga";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useApi } from "../../components/customHooks/useApi";
import CustomFeild from "../../components/Form/CustomField";

export function Register({ history }) {
   useInjectReducer({ key: "signUp", reducer });
   useInjectSaga({ key: "signUp", saga });
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
      localStorage.clear();
   }, []);
   const [loading, setLoading] = useState(false);
   const url = "/users/register";
   const [, createUser] = useApi(url, {}, { method: "POST" }, false);
   const intialState = {
      firstName: "",
      email: "",
      password: "",
   };

   const formFields = [
      {
         type: "text",
         name: "firstName",
         label: "First Name",
         placeholder: "",
      },
      {
         type: "text",
         name: "email",
         label: "Email",
         placeholder: "",
         isEmailField: true,
      },
      {
         type: "password",
         name: "password",
         label: "Password",
         placeholder: "",
         isPaswordField: true,
         isShowPasswordStrength: true,
      },
   ];

   const handleSubmit = async (values) => {
      console.log("values", values);
      setLoading(true);
      const { responseData, isLoading } = await createUser(values);
      setLoading(isLoading);
      const { hasError, errorMessage, success } = responseData || {};
      if (!hasError && success) {
         setLoading(false);
         history.push("/login");
      } else {
         setLoading(false);
         alert(`Email already exists or ${errorMessage}`);
      }
   };

   return (
      <div className="wrapper">
         <Header />

         <section className="content">
            <div className="content-upper">
               <main className="content-upper-main">
                  {/* MAIN AREA START */}

                  <div className="panel">
                     <div className="panel-header">
                        <div className="panel-left">
                           <div className="panel-label">Register</div>
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
                                 An invite code is required to register for system access.
                              </p>
                           </div>

                           <div className="form-group">
                              <label className="group-label" htmlFor="invite-code">
                                 Invite Code
                              </label>
                              <div className="input-group">
                                 <div className="form-input" />
                                 {/* <input
                                    id="invite-code"
                                    name="invite-code"
                                    type="text"
                                    className="form-input"
                                    autocomplete="off"
                                    value="12834648559623596"
                                 /> */}
                              </div>
                           </div>

                           <div className="btn-link-group balance-text">
                              Don't have an invite code?
                              <Link className="btn btn-link text-sm" to="account/waitlist">
                                 <i className="fas fa-id-card-alt" />
                                 Request Access
                              </Link>
                           </div>

                           <hr />

                           <Formik
                              initialValues={intialState}
                              validationSchema={signupSchema}
                              onSubmit={(values) => {
                                 handleSubmit(values);
                              }}
                           >
                              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                 <Form>
                                    {formFields.map((field, index) => {
                                       const key = `formField${index}`;
                                       return (
                                          <CustomFeild
                                             key={key}
                                             feild={field}
                                             errors={errors}
                                             touched={touched}
                                             onChange={handleChange}
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

                                    <div className="btn-link-group balance-text" style={{ margin: "-5px 0 30px" }}>
                                       You must be least 18 years old to use this site. By creating an account, you
                                       agree to the
                                       <Link className="btn btn-link" to="/legal">
                                          <i className="fas fa-book" />
                                          Privacy &amp; Legal Policies
                                       </Link>
                                    </div>

                                    <div className="btn-group">
                                       <div className="btn-space" />
                                       <div className="btn-hold">
                                          {loading ? (
                                             <button className="btn btn-primary login-btn" type="button" disabled>
                                                <span
                                                   className="spinner-border spinner-border-sm"
                                                   role="status"
                                                   aria-hidden="true"
                                                />
                                                Loading...
                                             </button>
                                          ) : (
                                             <button type="submit" className="btn btn-primary">
                                                Register
                                             </button>
                                          )}
                                       </div>
                                       <div className="btn-space" />
                                    </div>
                                 </Form>
                              )}
                           </Formik>
                        </div>

                        {/* FORM END */}
                     </div>
                     <div className="panel-footer">
                        <div className="panel-left">
                           <div className="panel-corner panel-corner-bl" />
                        </div>
                        <div className="panel-mid">
                           <div className="panel-corner panel-footer-mid" />
                        </div>
                        <div className="panel-right">
                           <div className="panel-corner panel-corner-br" />
                        </div>
                     </div>
                  </div>

                  <div className="btn-link-group balance-text">
                     Already have an account?
                     <Link className="btn btn-link" to="/login">
                        <i className="fas fa-sign-in-alt" />
                        Log In
                     </Link>
                  </div>

                  {/* MAIN AREA END */}
               </main>
            </div>
         </section>
         <Footer />
      </div>
   );
}

Register.propTypes = {
   dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
   signUp: makeSelectRegister(),
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
)(Register);
