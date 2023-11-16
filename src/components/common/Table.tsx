import React from "react";
import Column from "antd/es/table/Column";
import { Table as AntdTable, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface DataType {
  key: number;
  title?: string;
  content?: string;
}

interface TableInterface<T> {
  tableName?: string;
  columns: ColumnsType<T>;
  data: T[];
  showModal?: (record: DataType, rowIndex: number) => void;
  handleClick?: () => void;
}

const Table: React.FC<TableInterface<DataType>> = ({
  columns,
  data,
  tableName,
  showModal,
  handleClick,
}) => {
  return (
    <div onClick={handleClick && handleClick} role="none">
      {tableName && <div className="font-bold text-xl m-5">{tableName}</div>}
      <AntdTable
        key={tableName}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              return showModal
                ? showModal(record, rowIndex as number)
                : console.log("");
            },
          };
        }}
      />
    </div>
  );
};

export default React.memo(Table);
