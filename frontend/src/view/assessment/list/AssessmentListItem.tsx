import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/assessment/assessmentSelectors';

const AssessmentListItem = (props) => {
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
          <Link to={`/assessment/${record.id}`}>
            {record.title}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.title}</div>;
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

AssessmentListItem.propTypes = {
  value: PropTypes.any,
};

export default AssessmentListItem;
