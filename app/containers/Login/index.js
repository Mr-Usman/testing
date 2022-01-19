/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Formik, Form, Field } from 'formik';
import makeSelectLogin from './selectors';
import { loginSchema } from '../../validations/index';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CustomFeild from '../../components/Form/CustomField';
import { useApi } from '../../components/customHooks/useApi';

export function Login({ history }) {
  const url = '/users/login';
  const [, loginUser] = useApi(url, {}, { method: 'POST' }, false);
  const [loading, setLoading] = useState(false);
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const intialState = {
    email: '',
    password: '',
  };
  const formFields = [
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      isEmailField: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      isPaswordField: true,
      isShowPasswordStrength: false,
    },
  ];
  const handleSubmit = async values => {
    console.log('values', values);
    setLoading(true);
    const { responseData, isLoading } = await loginUser(values);
    setLoading(isLoading);
    const { hasError, errorMessage } = responseData || {};
    if (!hasError) {
      setLoading(false);
      localStorage.setItem('token', responseData.token);
      localStorage.setItem('user', JSON.stringify(responseData.user));
      history.push('/user');
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="wrapper">
        <Header />
        <section className="content">
          <div className="content-upper">
            <main className="content-upper-main">
              {/* MAIN AREA START */}
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-left">
                    <div className="panel-label">
                      <i className="fas fa-sign-in-alt" />
                      Sign In
                    </div>
                    <div className="panel-triangle-tl" />
                    <div className="stripe" />
                    <div className="stripe" />
                    <div className="stripe" />
                  </div>
                  <div className="panel-mid" />
                  <div className="panel-right">
                    <div className="panel-corner panel-corner-tr" />
                  </div>
                </div>

                <div className="panel-content">
                  {/* FORM START */}
                  <div className="form">
                    <div className="form-text balance-text">
                      Submit your credentials for authentication to access to
                      the system.
                    </div>

                    <Formik
                      initialValues={intialState}
                      validationSchema={loginSchema}
                      onSubmit={values => {
                        handleSubmit(values);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
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
                          <div className="form-text">
                            Unable to sign in?
                            <Link className="btn btn-link" to="/reset-password">
                              <i className="fas fa-undo-alt" />
                              Reset Password
                            </Link>
                          </div>
                          <div className="btn-group">
                            <div className="btn-space" />
                            <div className="btn-hold">
                              <button type="submit" className="btn btn-primary">
                                <i className="fas fa-sign-in-alt" />
                                Sign In
                              </button>
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
                Don't have an account?
                <Link className="btn btn-link" to="/signup">
                  <i className="fas fa-user-plus" />
                  Register
                </Link>
              </div>
              {/* MAIN AREA END */}
            </main>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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
)(Login);
