import React from 'react';
import { Table as AntdTable } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface TableInterface<T> {
	columns: ColumnsType<T>;
	data: T[];
	// tableType: UpdateProductTableDataType | OrderListTableDataType;
	// handleClick?: () => void;
}

const Table = <T,>({ data, columns }: TableInterface<T>) => (
	<div role="none">
		<AntdTable key="1" columns={columns as ColumnsType<T>} dataSource={data} />
	</div>
);

export default React.memo(Table);
