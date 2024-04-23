import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/assessmentAnswer/assessmentAnswerSelectors';

const AssessmentAnswerViewItem = (props) => {
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
          <Link to={`/assessment-answer/${record.id}`}>
            {record.status}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.status}</div>;
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

export default AssessmentAnswerViewItem;
