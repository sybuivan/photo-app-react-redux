import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

function SelectFiled(props) {
  const {field, form, label, placeholder, options } = props;
  const { name, value } = field;
  const {touched, errors} = form
  const showError = errors[name] && touched[name]

  console.log(showError);

  const selectedOption = options.find(option => option.value === value);

  console.log('Value select', selectedOption);
  const handleSelectedOptionChange = (selectedOption) => {
   const selectedValue = selectedOption ? selectedOption.value : selectedOption;

   const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        name={name}
        {...field}
        
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

SelectFiled.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

export default SelectFiled;
