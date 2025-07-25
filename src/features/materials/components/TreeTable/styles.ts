import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const TableHeader = styled.tr`
  background: #f5f5f5;
  font-weight: bold;

  th {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: left;
  }
`;

export const TableRow = styled.tr`
  .column-name {
    button {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      border: 0;
    }
  }

  td {
    padding: 6px 8px;
    border: 1px solid #e0e0e0;
    text-align: right;

    &:first-child {
      text-align: left;
    }
  }
`;

export const GroupRow = styled.tr`
  background-color: #f0f0f0;

  td {
    font-weight: 600;
    padding: 6px;
    border: 1px solid #ccc;
  }
`;

export const TotalRow = styled.tr`
  background-color: #e0e0e0;
  font-weight: bold;

  td {
    border: 1px solid #999;
    padding: 8px;
  }
`;

export const TableCell = styled.td``;
