import { DatePicker, Form } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import { useFormContext } from 'react-hook-form';

const DatePickerFormItemWithOffice = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    autoFocus,
    showTime,
    required,
    placeholder,
    externalErrorMessage,
    size,
    office,
    officeName
  } = props;

  const {
    register,
    setError,
    formState: {  errors,  touchedFields, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  useEffect(() => {
    //@ts-ignore
    register(name,{required: true});
    setValue(officeName, {...office}, { shouldValidate: true, shouldDirty: true });
  }, [register,officeName, name]);

  return (
    <Form.Item
      {...layout}
      label={label}
      required={required}
      labelAlign="left"
      requiredMark={required}
      validateStatus={errorMessage ? 'error' : 'success'}
      help={errorMessage || hint}
    >
      <DatePicker
        onChange={(value) => {
          setValue(name, value, { shouldValidate: true, shouldDirty: true });
          props.onChange && props.onChange(value);
        }}
        value={watch(name)}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        autoFocus={autoFocus || false}
        style={{
          width: '100%',
        }}
        showTime={
          showTime
            ? {
                format: 'HH:mm',
              }
            : undefined
        }
        size={size || undefined}
        format={showTime ? 'YYYY-MM-DD HH:mm' : undefined}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

DatePickerFormItemWithOffice.defaultProps = {
  layout: null,
  showTime: false,
  required: false,
};

DatePickerFormItemWithOffice.propTypes = {
  showTime: PropTypes.bool,

  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  layout: PropTypes.object,
  required: PropTypes.bool,
  size:PropTypes.string,
  office:PropTypes.any,
  officeName:PropTypes.string,
};

export default DatePickerFormItemWithOffice;
