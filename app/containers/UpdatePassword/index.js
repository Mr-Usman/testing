/**
 *
 * UpdatePassword
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Formik, Form, Field } from 'formik';
import { updatePasswordSchema } from '../../validations/index';

import makeSelectUpdatePassword from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CustomFeild from '../../components/Form/CustomField';


export function UpdatePassword() {
  useInjectReducer({ key: 'updatePassword', reducer });
  useInjectSaga({ key: 'updatePassword', saga });

  const intialState = {
    password: '',
    passwordConfirmation: ''
  }
  const formFields = [
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      isPaswordField: true,
      isShowPasswordStrength: false

    },
    {
      type: 'password',
      name: 'passwordConfirmation',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      isPaswordField: true,
      isShowPasswordStrength: false

    }
  ];
  const handleSubmit = (values) => {
    const { password } = values || {};
    console.log('password', password);
  }

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
              <div className="panel-label"><i className="fas fa-sign-in-alt" />Update Password</div>
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
              Update your password to access the system.
              </div>
            
              <Formik
                    initialValues={intialState}
                    validationSchema={updatePasswordSchema}
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
                            />)
                        }
                        )}

<div className="btn-group">
                <div className="btn-space" />
                <div className="btn-hold">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-sign-in-alt" />Update Password
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
     
        {/* MAIN AREA END */}
      </main>
    </div>
  </section>
  <Footer />
  </div>
  );
}

UpdatePassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  updatePassword: makeSelectUpdatePassword(),
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
)(UpdatePassword);