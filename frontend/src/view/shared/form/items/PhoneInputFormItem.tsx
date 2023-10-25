import { Form, Input,Select, Tooltip } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import countries from '../../__mocks__/country';
import _ from 'lodash';

const { Option } = Select;

export const PhoneInputFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    size,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    prefix,
    Min,
    Max,
    externalErrorMessage,
    required,
    addonAfter,
  } = props;

  const {
    setValue,
    watch,
    register,
    
    formState: {errors, touchedFields, isSubmitted },
  } = useFormContext();
  const [code , setCode] = React.useState(null)
  useEffect(() => {
    register(name);
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );
  
    const prefixSelector = (
    <Form.Item noStyle>
      <div style={{width:100}}>
      <Select 
      style={{ width: '100%', }}
      allowClear
      onChange={(value) =>setValue(name, value, { shouldValidate: true, shouldDirty: true })    }
      >
        {countries.map((country, i)=>(<Option key={i.toString(36) + i} value={country.dial_code}>{country.dial_code}</Option>))}
      </Select>
      </div>
    </Form.Item>
  );

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
      <Input
        id={name}
        name={name}
        type={type}
        value={watch(name)}
        addonBefore={prefixSelector}
        onChange={(event) => {
          setValue(name, event.target.value, { shouldValidate: true, shouldDirty: true });
          props.onChange &&
            props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        size={size || undefined}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || false}
        autoComplete={autoComplete || undefined}
        maxLength={Max || undefined}
        minLength={Min || undefined}
        prefix={prefix || undefined}
        addonAfter={addonAfter || undefined}
      />
    </Form.Item>
  );
};

PhoneInputFormItem.defaultProps = {
  layout: null,
  type: 'text',
  required: false,
};

PhoneInputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  Min: PropTypes.number,
  Max: PropTypes.number,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  externalErrorMessage: PropTypes.string,
  addonAfter: PropTypes.any,
};

export default PhoneInputFormItem;
