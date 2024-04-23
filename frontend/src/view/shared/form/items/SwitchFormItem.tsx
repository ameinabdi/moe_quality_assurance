import { Form, Switch } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import { useFormContext } from 'react-hook-form';

const SwitchFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    size,
    externalErrorMessage,
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
      validateStatus={errorMessage ? 'error' : 'success'}
      help={formHelperText}
    >
      <Switch
        onChange={(value) => {
          setValue(name, value, { shouldValidate: true, shouldDirty: true });
          props.onChange && props.onChange(value);
        }}
        checked={watch(name) || false}
        size={size || undefined}
      />
    </Form.Item>
  );
};

SwitchFormItem.defaultProps = {
  layout: null,
};

SwitchFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
};

export default SwitchFormItem;
