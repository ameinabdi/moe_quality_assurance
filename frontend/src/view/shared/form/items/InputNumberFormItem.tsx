import { Form, InputNumber } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';

const InputNumberFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    size,
    placeholder,
    autoFocus,
    autoComplete,
    prefix,
    required,
    externalErrorMessage,
    disabled,
    value,
    max,
    min,
    hidden
  } = props;

  const {
    register,
    //@ts-ignore
   
    //@ts-ignore
    formState: {  errors, touchedFields, isSubmitted },
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

  return (
    <Form.Item
      {...layout}
      label={label}
      labelAlign="left"
      requiredMark={required}
      validateStatus={errorMessage ? 'error' : 'success'}
      required={required}
      help={errorMessage || hint}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
        id={name}
        name={name}
        onChange={(value) => {
          setValue(name, value, { shouldValidate: true, shouldDirty: true });
          props.onChange && props.onChange(value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        value={value || watch(name)}
        size={size || undefined}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || false}
        autoComplete={autoComplete || undefined}
        prefix={prefix || undefined}
        disabled={disabled || undefined}
        max={max || undefined}
        min={min || undefined}
        hidden={hidden}

      />
    </Form.Item>
  );
};

InputNumberFormItem.defaultProps = {
  layout: null,
  required: false,
};

InputNumberFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.any,
  max:PropTypes.any,
  min:PropTypes.any,
  externalErrorMessage: PropTypes.string,

};

export default InputNumberFormItem;
