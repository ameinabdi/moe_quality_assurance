import styled from 'styled-components';

const TableWrapper = styled.div`
  .ant-table th {
    white-space: nowrap;
  }

  .ant-table td {
    white-space: nowrap;
  }

  .ant-table .table-actions {
    text-align: right;
  }

  .ant-table .table-actions a,
  .ant-table .table-actions button {
    margin-left: 8px;
  }
  .custom-progress-text .ant-progress-text {
    font-size: 12px; /* Set the desired font size here */
    color: #000; /* Optional: change the text color if needed */
  }
`;

export default TableWrapper;
