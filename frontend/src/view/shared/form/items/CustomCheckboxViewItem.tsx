import { Checkbox, Form } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

const CustomCheckboxViewItem = (props) => {
  const {
    label,
    name,
    layout,
    value,
    required,
    record
  } = props;


  return (
    <Form.Item
      {...layout}
      label={label}
      labelAlign="left"
      required={required}
    >
      <Checkbox
        id={name}
        disabled
        checked={_.includes(record, value) || false}
      />
    </Form.Item>
  );
};

CustomCheckboxViewItem.defaultProps = {
  layout: null,
};

CustomCheckboxViewItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  layout: PropTypes.object,
  value:PropTypes.string,
  record:PropTypes.any,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,

};

export default CustomCheckboxViewItem;
