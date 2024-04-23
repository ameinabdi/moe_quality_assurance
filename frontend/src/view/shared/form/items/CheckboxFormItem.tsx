import { Checkbox, Form } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';

const CheckboxFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
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
          setValue(
            name,
            Boolean(event.target.checked),
            { shouldValidate: true, shouldDirty: true },
          );
          props.onChange &&
            props.onChange(event.target.checked);
        }}
        checked={watch(name) || false}
      />
    </Form.Item>
  );
};

CheckboxFormItem.defaultProps = {
  layout: null,
};

CheckboxFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,

};

export default CheckboxFormItem;
