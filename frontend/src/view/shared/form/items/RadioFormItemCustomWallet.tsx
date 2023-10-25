import { Form } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import { useFormContext } from 'react-hook-form';

const RadioFormItemCustomWallet = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    options,
    externalErrorMessage,
    required,
    size
  } = props;

  const {
    register,
    //@ts-ignore
    
    //@ts-ignore
    formState: {errors, touchedFields, isSubmitted },
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
      requiredMark={required}
      validateStatus={errorMessage ? 'error' : 'success'}
      required={required}
      help={formHelperText}
    >
      <RadioGroup
        id={name}
        size={size || undefined}
        onChange={(e) => {
          setValue(name, e.target.value, { shouldValidate: true, shouldDirty: true });
          props.onChange && props.onChange(e.target.value);
        }}
        options={options}
        value={watch(name) || ''}
      />
    </Form.Item>
  );
};

RadioFormItemCustomWallet.defaultProps = {
  layout: null,
  required: false,
};

RadioFormItemCustomWallet.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  size:PropTypes.string
};

export default RadioFormItemCustomWallet;
