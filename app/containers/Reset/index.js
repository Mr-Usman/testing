/**
 *
 * Reset
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useApi } from '../../components/customHooks/useApi';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { resetPasswordSchema } from '../../validations/index';
import makeSelectReset from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/css/site-forms.less';
import CustomFeild from '../../components/Form/CustomField';
import { toast } from 'react-toastify';

export function Reset({ history }) {
  const url = '/users/sendforgetPasswordEmail';
  const [, resetUser] = useApi(url, {}, { method: 'POST' }, false);
  const [loading, setLoading] = useState(false);
  useInjectReducer({ key: 'reset', reducer });
  useInjectSaga({ key: 'reset', saga });
  const intialState = {
    email: '',
  };
  const formFields = [
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      isEmailField: true,
      isReset: true
    },
  ];

  const handleSubmit = async values => {
    console.log('values', values);
    setLoading(true);
    const { responseData, isLoading } = await resetUser(values);
    setLoading(isLoading);
    const { hasError, errorMessage, sucess = '', msg = ''} = responseData || {};
    if (!hasError) {
      setLoading(false);
      toast.success('Reset user query has been made successfully!');

      // history.push('/login');
    } else {
      setLoading(false);
      toast.error(msg)
    }
  };

  return (
    <div className="wrapper">
      <Header />

      {/* FORM START */}

      <section className="content">
        <div className="content-upper">
          <main className="content-upper-main">
            {/* MAIN AREA START */}
            <div className="panel">
              <div className="panel-header">
                <div className="panel-left">
                  <div className="panel-label">Reset Password</div>
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
                <div class="form-group">
                              <p class="form-text balance-text">Request a password reset email.</p>
                           </div>




                  <Formik
                    initialValues={intialState}
                    validationSchema={resetPasswordSchema}
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
                            />
                          );
                        })}

                        <div className="btn-group">
                          <div className="btn-space" />
                          <div className="btn-hold">
                            {loading ? <button class="btn btn-primary login-btn" type="button" disabled>
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Loading...
                            </button> : <button type="submit" className="btn btn-primary">
                              Send Email
                            </button>}

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
              Remembered your password?
              <Link className="btn btn-link" to="/login">
               <i className="fas fa-sign-in-alt" />Log In
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












Reset.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reset: makeSelectReset(),
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
)(Reset);
