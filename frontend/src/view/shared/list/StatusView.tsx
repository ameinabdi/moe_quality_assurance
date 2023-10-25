import { i18n } from 'src/i18n';
import React from 'react';
import { Tag } from 'antd';

function StatusView(props) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value === 'Inactive') {
    return (
      <Tag color="#F30845">{i18n(`common.enumerators.status.${value}`)}</Tag>
    );
  }
 

  return (
    <Tag color="#00AC73">{i18n(`common.enumerators.status.${value}`)}</Tag>
  );
}

export default StatusView;
