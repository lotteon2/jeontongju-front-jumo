import React from "react";
import Column from "antd/es/table/Column";
import { Table as AntdTable, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "@emotion/styled";
import { UpdateProductTableDataType } from "../../constants/TableDataType/UpdateProductTableDataType";

interface TableInterface<T> {
  tableName?: string;
  columns: ColumnsType<T>;
  data: T[];
  handleClick?: () => void;
}

const Table: React.FC<TableInterface<UpdateProductTableDataType>> = ({
  columns,
  data,
  tableName,
  handleClick,
}) => {
  return (
    <div onClick={handleClick && handleClick} role="none">
      {tableName && <StyledTableName>{tableName}</StyledTableName>}
      <AntdTable key={tableName} columns={columns} dataSource={data} />
    </div>
  );
};

export default React.memo(Table);

const StyledTableName = styled.div`
  font-size: 2rem;
`;
