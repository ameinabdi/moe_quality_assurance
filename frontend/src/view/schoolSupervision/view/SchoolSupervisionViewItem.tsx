import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/schoolSupervision/schoolSupervisionSelectors';

const SchoolSupervisionViewItem = (props) => {
  const hasPermissionToRead = useSelector(
    selectors.selectAuditLogToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link to={`/school-supervision/${record.id}`}>
            {record.principal}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.principal}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
};

export default SchoolSupervisionViewItem;
