import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const {touched, errors} = form
  const showError = errors[name] && touched[name]
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        {...field}
        
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
