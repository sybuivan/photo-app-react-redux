import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

function SelectFiled(props) {
  const { options, field, label, placeholder } = props;
  const { name, value } = field;
  const selectedOption = options.find(option => option.value === value);

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
        name={name}
        {...field}
        value={selectedOption}
        
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
      />
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
