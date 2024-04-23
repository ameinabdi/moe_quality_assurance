import { Checkbox, Form } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';

const CustomCheckboxFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    value,
    required,
    externalErrorMessage,
  } = props;

  const {
    register,
    //@ts-ignore
   
    //@ts-ignore
    formState: { errors, touchedFields, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    //@ts-ignore
    register(name);
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  const formHelperText = errorMessage || hint;
  return (
    <Form.Item
      {...layout}
      label={label}
      labelAlign="left"
      validateStatus={errorMessage ? 'error' : 'success'}
      help={formHelperText}
      required={required}
    >
      <Checkbox
        id={name}
        onChange={(event) => {
          const currentValues = watch(name) || [];
          if (event.target.checked) {
            setValue(name, value, { shouldValidate: true, shouldDirty: true });
          } else {
            setValue(name, null, { shouldValidate: true, shouldDirty: true });
          }
          props.onChange && props.onChange(currentValues);
        }}
        checked={(watch(name) === value) || false}
      />
    </Form.Item>
  );
};

CustomCheckboxFormItem.defaultProps = {
  layout: null,
};

CustomCheckboxFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  layout: PropTypes.object,
  value:PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,

};

export default CustomCheckboxFormItem;
