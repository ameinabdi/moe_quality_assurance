import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/school/schoolSelectors';

const SchoolViewItem = (props) => {
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
          <Link to={`/school/${record.id}`}>
            {record.schoolName}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.schoolName}</div>;
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

export default SchoolViewItem;
