import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/dimension5/dimension5Selectors';

const Dimension5ViewItem = (props) => {
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
          <Link to={`/dimension5/${record.id}`}>
            {record.id}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.id}</div>;
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

export default Dimension5ViewItem;
