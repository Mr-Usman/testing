/* eslint-disable css-modules/no-unused-class */
import React, { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';

const TypeaheadFeild = ({
  label,
  errors,
  touched,
  name,
  id,
  defaultVal,
  list,
  errorIcon,
  val,
  setFieldValue,
  setFieldTouched,
}) => {
  const [multiple] = useState(false);
  const [selected, setSelected] = useState(
    list.filter(l => l.id === defaultVal),
  );

  // eslint-disable-next-line no-shadow
  const changeHandler = selected => {
    setSelected(selected);
    setFieldValue(selected);
  };
  return <h1>formik feild and error message</h1>;
};

TypeaheadFeild.defaultProps = {
  errors: {},
  touched: false,
  id: '',
  defaultVal: '',
  list: [],
  errorIcon: '',
  val: '',
};

TypeaheadFeild.propTypes = {
  label: PropTypes.string.isRequired,
  errors: PropTypes.any,
  touched: PropTypes.any,
  name: PropTypes.string.isRequired,
  id: PropTypes.any,
  defaultVal: PropTypes.any,
  list: PropTypes.arrayOf(PropTypes.any),
  errorIcon: PropTypes.any,
  val: PropTypes.any,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

TypeaheadFeild.defaultProps = {};

const CheckPassword = (inputtxt) => {
  const strongPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const mediumPass = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
  const week = /^(?=.*\d).{6,20}$/;
  if (strongPass.test(inputtxt)) {
    return(
    <div className="password-meter">
      <div className="meter-box meter-fill" />
      <div className="meter-box meter-fill" />
      <div className="meter-box meter-fill" />
      <div className="meter-box meter-fill" />
      <div className="meter-box meter-fill" />
    </div>)
  } else if (mediumPass.test(inputtxt)) {

    return (
      <>
       <div className="password-meter">
        <div className="meter-box meter-fill" />
        <div className="meter-box meter-fill" />
        <div className="meter-box meter-fill" />
        <div className="meter-box" />
        <div className="meter-box" />
        </div>
      </>
    )

  } else if (week.test(inputtxt)) {
    <>
      <div className="password-meter">
      <div className="meter-box meter-fill" />
      <div className="meter-box" />
      <div className="meter-box" />
      <div className="meter-box" />
      <div className="meter-box" />
      </div>

    </>
  }
  else {
    return (
      <>
        <div className="password-meter">
      <div className="meter-box" />
      <div className="meter-box" />
      <div className="meter-box" />
      <div className="meter-box" />
      <div className="meter-box" />
      </div>
      </>
    )
  }
}
const InputField = ({
  label,
  type,
  errors,
  touched,
  name,
  placeholder,
  isPaswordField,
  isEmailField,
  onChange,
  isShowPasswordStrength,
  isPassValid,
  isReset,
  icon
}) => {
  const [show, setShow] = useState(true);
  return(
  <>
    <div className="form-group">
      <label className={`group-label`} htmlFor={name}>{label}<i className={icon || "fas fa-shield-alt label-icon"} /></label>
      <div className="input-group">
        <input id={name} name={name} type={show ? type : 'get'} className="form-input" autoComplete="off" onChange={onChange} />
        {isPaswordField && <button type="button" onClick={() => setShow(!show)} className="btn btn-secondary-outline btn-square">
          <i className="fas fa-eye" />
        </button>}
      </div>

      {isEmailField &&
        <div className="group-info balance-text">
          For important account communications only. We'll never share your email.
        </div>
      }
      {isShowPasswordStrength &&
        <>
          <div className="group-info balance-text">
            Great passwords use 10 or more upper and lower case characters, numbers, and symbols.
          </div>
          <div className="group-info balance-text" style={{ marginTop: '-5px' }}>
            PASSWORD STRENGTH
            {CheckPassword()}
          </div>
        </>
      }
      {errors && errors[name] && touched[name] && <div class="group-invalid">{errors[name]}</div>}
    </div>
  </>
);
    }
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  errors: PropTypes.any,
  touched: PropTypes.any,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isPaswordField: PropTypes.bool,
  isShowPasswordStrength: PropTypes.bool,
  isEmailField: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  isPaswordField: false,
  errors: {},
  touched: false,
  isShowPasswordStrength: false,
  isEmailField: false,

};

const CheckBoxInput = ({ label, type, name }) => (
  <h1>formik field and html error</h1>
  //   <div
  //     className={`${commonStyle['form-group']} ${
  //       commonStyle['form-check']
  //     } form-group form-check`}
  //   >
  //     <Field type={type} className="form-check-input" name={name} />
  //     <label className="form-check-label" htmlFor={name}>
  //       {label}
  //     </label>
  //   </div>
);

const Switch = () => (
  <div className="form-switch">
  <button className="btn btn-switch">
    <span className="text-color3">OFF</span> <i className="icon fa fa-toggle-on" /><span className="text-color1"> ON</span>
  </button>
</div>

);
CheckBoxInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

CheckBoxInput.defaultProps = {
  type: 'checkbox',
};
const SelectField = ({
  label,
  errors,
  touched,
  name,
  id,
  defaultVal,
  list,
  allowOptionNull,
  errorIcon,
  val,
}) => (
  <>
    <div className="main-content-form-headers">
      <span>{label}</span>
    </div>
    <div
      style={{ position: 'relative', width: '100%' }}
      className={`frg-select-container color-light input-container ${errors[name] && touched[name] ? 'error' : ''
        }`}
    >
      <Field
        as="select"
        id={id}
        name={name}
        className="select-style"
        defaultValue={defaultVal}
      >
        ${allowOptionNull && <option value={null} />}
        {list.map(l => (
          <option key={l.id} value={l.id}>
            {l[val]}
          </option>
        ))}
      </Field>
      <>
        <div className="error_messages">
          <span className="frg-body-font-14px">{errors[name]}</span>
        </div>
        <div id="username_error_icon" className="error_messages_icon">
          <img src={errorIcon} alt="error_icon" />
        </div>
      </>
    </div>
  </>
);
SelectField.defaultProps = {
  errors: {},
  touched: false,
  id: '',
  defaultVal: '',
  errorIcon: '',
};
SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  errors: PropTypes.any,
  touched: PropTypes.any,
  name: PropTypes.string.isRequired,
  id: PropTypes.any,
  defaultVal: PropTypes.any,
  errorIcon: PropTypes.any,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  allowOptionNull: PropTypes.bool,
  val: PropTypes.string.isRequired,
};

SelectField.defaultProps = {
  allowOptionNull: true,
};

const CustomFeild = ({
  feild,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  onChange
}) => {
  if (feild.type === 'select')
    return (
      <SelectField
        label={feild.label}
        errors={errors}
        touched={touched}
        name={feild.name}
        id={feild.id}
        defaultVal={feild.defaultVal}
        list={feild.list}
        allowOptionNull={feild.allowOptionNull}
        val={feild.val}
      />
    );
  if (feild.type === 'checkbox')
    return (
      <CheckBoxInput
        label={feild.label}
        errors={errors}
        touched={touched}
        name={feild.name}
        readOnly={feild.readOnly}
        type={feild.type}
      />
    );
  if (feild.type === 'switch')
    return (
      <Switch
        label={feild.label}
        errors={errors}
        touched={touched}
        name={feild.name}
        readOnly={feild.readOnly}
        type={feild.type}
      />
    );
  if (feild.type === 'typeahead')
    return (
      <TypeaheadFeild
        label={feild.label}
        errors={errors}
        touched={touched}
        name={feild.name}
        id={feild.id}
        defaultVal={feild.defaultVal}
        list={feild.list}
        val={feild.val}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
    );
    if (feild.type === 'date')
    return (
      <InputField
      label={feild.label}
      errors={errors}
      touched={touched}
      name={feild.name}
      placeholder={feild.placeholder}
      readOnly={feild.readOnly}
      type={feild.type}
      isPaswordField={feild.isPaswordField}
      isShowPasswordStrength={feild.isShowPasswordStrength}
      isEmailField={feild.isEmailField}
      onChange={onChange}
      isReset={feild.isReset}
      icon={feild.icon}
    />
    );
  return (
    <InputField
      label={feild.label}
      errors={errors}
      touched={touched}
      name={feild.name}
      placeholder={feild.placeholder}
      readOnly={feild.readOnly}
      type={feild.type}
      isPaswordField={feild.isPaswordField}
      isShowPasswordStrength={feild.isShowPasswordStrength}
      isEmailField={feild.isEmailField}
      onChange={onChange}
      isReset={feild.isReset}
      icon={feild.icon}
    />
  );
};

CustomFeild.defaultProps = {
  errors: {},
  touched: false,
};

CustomFeild.propTypes = {
  feild: PropTypes.objectOf(
    PropTypes.oneOfType[(PropTypes.string, PropTypes.number, PropTypes.any)],
  ).isRequired,
  errors: PropTypes.object,
  touched: PropTypes.bool,

  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};
export default CustomFeild;
